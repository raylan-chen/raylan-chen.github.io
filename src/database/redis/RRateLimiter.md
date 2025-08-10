---
title: RRateLimiter
category:
  - Redis
---

# RRateLimiter

## 参考链接

[redisson分布式限流 RRateLimiter 源码分析讲一讲平时用的比较多的限流模块-RRateLimiter， - 掘金](https://juejin.cn/post/7159872509478141959#heading-3)

[Redisson分布式限流器RRateLimiter原理解析 · Issue #13 · oneone1995/blog](https://github.com/oneone1995/blog/issues/13)

[redisson 限流器设置过期时间_mob64ca12f51824的技术博客_51CTO博客](https://blog.51cto.com/u_16213451/10955464)

###### 

## 简要说明

业务涉及到调用第三方API，但是第三方设置了QPS限制，遂采用RRateLimiter进行API级别的速率限制。



## 限流器配置及使用

```java
// 限流器创建
String rateLimiterKey = RATE_LIMITER_KEY_PREFIX + apiName;
RRateLimiter rateLimiter = redissonClient.getRateLimiter(rateLimiterKey);

// 设置限流器配置
rateLimiter.trySetRate/setRate(mode, rate, rateInterval, rateIntervalUnit);

// 限流器使用
rateLimiter.tryAcquire/acquire(permits);
rateLimiter.tryAcquire(permits, timeout, unit);
```

* mode：限流器类型；
* rate：产生许可证（permits）的速率，与 rateInterval 配合使用；
* rateInterval：产生许可证的速率间隔；
* rateIntervalUnit：速率时间间隔单位。



## 使用过程中遇到的问题

问题描述：trySetRate() 函数 「rate 参数」修改后不生效？

```java
// 设置限流器配置
rateLimiter.trySetRate(RateType.OVERALL, rate, rateInterval, rateIntervalUnit);
```



trySetRate() 部分源码**：hsetnx**

```TypeScript
@Override
public RFuture<Boolean> trySetRateAsync(RateType type, long rate, long rateInterval, RateIntervalUnit unit) {
    return commandExecutor.evalWriteNoRetryAsync(getRawName(), LongCodec.INSTANCE, RedisCommands.EVAL_BOOLEAN,
            "redis.call('hsetnx', KEYS[1], 'rate', ARGV[1]);"
          + "redis.call('hsetnx', KEYS[1], 'interval', ARGV[2]);"
          + "return redis.call('hsetnx', KEYS[1], 'type', ARGV[3]);",
            Collections.singletonList(getRawName()), rate, unit.toMillis(rateInterval), type.ordinal());
}
```

另一个设置函数：setRate() 函数

```Java
rateLimiter.setRate(RateType.OVERALL, rate, rateInterval, rateIntervalUnit);
```

setRate() 部分源码**：hset** 

```TypeScript
@Override
public RFuture<Void> setRateAsync(RateType type, long rate, long rateInterval, RateIntervalUnit unit) {
    return commandExecutor.evalWriteAsync(getRawName(), LongCodec.INSTANCE, RedisCommands.EVAL_BOOLEAN,
            "local valueName = KEYS[2];"
                + "local permitsName = KEYS[4];"
                + "if ARGV[3] == '1' then "
                + "    valueName = KEYS[3];"
                + "    permitsName = KEYS[5];"
                + "end "
                +"redis.call('hset', KEYS[1], 'rate', ARGV[1]);"
                    + "redis.call('hset', KEYS[1], 'interval', ARGV[2]);"
                    + "redis.call('hset', KEYS[1], 'type', ARGV[3]);"
                    + "redis.call('del', valueName, permitsName);",
            Arrays.asList(getRawName(), getValueName(), getClientValueName(), getPermitsName(), getClientPermitsName()), rate, unit.toMillis(rateInterval), type.ordinal());
}
```

总结：

```Java
// 设置限流器配置

// NOTE: 修改配置时, 需要先删除 Redis 中的限流数据配置, 然后重新创建 ！！！(hsetnx)
// 默认创建的键值对过期时间: -1
rateLimiter.trySetRate(RateType.OVERALL, rate, rateInterval, rateIntervalUnit);
// 设置过期时间
// rateLimiter.expire(60, TimeUnit.SECONDS);

// NOTE: 可能删除已分配的许可证, 进而导致请求数超过预期设定！！！(hset & del)
// rateLimiter.setRate(RateType.OVERALL, rate, rateInterval, rateIntervalUnit);
```



## 钻牛角尖

> 原先误以为是 令牌桶，使用 Redis 的 Set（哈希） 结构去储存使用情况，结果一看源码才知道错得有点离谱！

Redisson 3.36.0——RRateLimiter 

1、底层：滑动窗口；

2、使用 Redis 的 Set、ZSet、String 三种结构来完成限流；

- Set（单机键名：getRawName()） 存储设置的速率 rate、间隔 interval、限流器类型（OVERALL 单机、PER_CLIENT 集群）；
- String（单机键名：getValueName()） 存储 目前还可获取到的许可证数量；
- ZSet（单机键名：getPermitsName()）采用 score 存储 已获取许可证的时间戳，member 存储获取获取许可证的个数；

RRateLimiter#acquire/tryAcquire 涉及到的源码：

```Java
private <T> RFuture<T> tryAcquireAsync(RedisCommand<T> command, Long value) {
    byte[] random = getServiceManager().generateIdArray();

    return commandExecutor.evalWriteAsync(getRawName(), LongCodec.INSTANCE, command,
            "local rate = redis.call('hget', KEYS[1], 'rate');"
          + "local interval = redis.call('hget', KEYS[1], 'interval');"
          + "local type = redis.call('hget', KEYS[1], 'type');"
          + "assert(rate ~= false and interval ~= false and type ~= false, 'RateLimiter is not initialized')"
          
          + "local valueName = KEYS[2];"
          + "local permitsName = KEYS[4];"
          + "if type == '1' then "
              + "valueName = KEYS[3];"
              + "permitsName = KEYS[5];"
          + "end;"

          + "assert(tonumber(rate) >= tonumber(ARGV[1]), 'Requested permits amount cannot exceed defined rate'); "

          + "local currentValue = redis.call('get', valueName); "
          + "local res;"
          + "if currentValue ~= false then "
                 + "local expiredValues = redis.call('zrangebyscore', permitsName, 0, tonumber(ARGV[2]) - interval); "
                 + "local released = 0; "
                 + "for i, v in ipairs(expiredValues) do "
                      + "local random, permits = struct.unpack('Bc0I', v);"
                      + "released = released + permits;"
                 + "end; "

                 + "if released > 0 then "
                      + "redis.call('zremrangebyscore', permitsName, 0, tonumber(ARGV[2]) - interval); "
                      + "if tonumber(currentValue) + released > tonumber(rate) then "
                           + "local values = redis.call('zrange', permitsName, 0, -1); "
                           + "local used = 0; "
                           + "for i, v in ipairs(values) do "
                                + "local random, permits = struct.unpack('Bc0I', v);"
                                + "used = used + permits;"
                           + "end; "
                           + "currentValue = tonumber(rate) - used; "
                      + "else "
                           + "currentValue = tonumber(currentValue) + released; "
                      + "end; "
                      + "redis.call('set', valueName, currentValue);"
                 + "end;"

                 + "if tonumber(currentValue) < tonumber(ARGV[1]) then "
                     + "local firstValue = redis.call('zrange', permitsName, 0, 0, 'withscores'); "
                     + "res = 3 + interval - (tonumber(ARGV[2]) - tonumber(firstValue[2]));"
                 + "else "
                     + "redis.call('zadd', permitsName, ARGV[2], struct.pack('Bc0I', string.len(ARGV[3]), ARGV[3], ARGV[1])); "
                     + "redis.call('decrby', valueName, ARGV[1]); "
                     + "res = nil; "
                 + "end; "
          + "else "
                 + "redis.call('set', valueName, rate); "
                 + "redis.call('zadd', permitsName, ARGV[2], struct.pack('Bc0I', string.len(ARGV[3]), ARGV[3], ARGV[1])); "
                 + "redis.call('decrby', valueName, ARGV[1]); "
                 + "res = nil; "
          + "end;"

          + "local ttl = redis.call('pttl', KEYS[1]); "
          + "if ttl > 0 then "
              + "redis.call('pexpire', valueName, ttl); "
              + "redis.call('pexpire', permitsName, ttl); "
          + "end; "
          + "return res;",
            Arrays.asList(getRawName(), getValueName(), getClientValueName(), getPermitsName(), getClientPermitsName()),
            value, System.currentTimeMillis(), random);
}
```

Lua 代码提取：

```lua
-- Redis限流器Lua脚本
-- KEYS[1]: 限流器配置的键名
-- KEYS[2]: 单机值存储键名  
-- KEYS[3]: 集群值存储键名
-- KEYS[4]: 单机许可存储键名
-- KEYS[5]: 集群许可存储键名
-- ARGV[1]: 请求的许可数量
-- ARGV[2]: 当前时间戳
-- ARGV[3]: 随机字节数组

-- 获取限流器配置
local rate = redis.call('hget', KEYS[1], 'rate')
local interval = redis.call('hget', KEYS[1], 'interval') 
local type = redis.call('hget', KEYS[1], 'type')

-- 验证限流器是否已初始化
assert(rate ~= false and interval ~= false and type ~= false, 'RateLimiter is not initialized')

-- 根据类型选择相应的键名
local valueName = KEYS[2]
local permitsName = KEYS[4]
if type == '1' then 
    valueName = KEYS[3]
    permitsName = KEYS[5]
end

-- 验证请求的许可数量不能超过定义的速率
assert(tonumber(rate) >= tonumber(ARGV[1]), 'Requested permits amount cannot exceed defined rate')

-- 获取当前值
local currentValue = redis.call('get', valueName)
local res

if currentValue ~= false then 
    -- 如果当前值存在，处理过期的许可
    local expiredValues = redis.call('zrangebyscore', permitsName, 0, tonumber(ARGV[2]) - interval)
    local released = 0
    
    -- 计算已释放的许可数量
    for i, v in ipairs(expiredValues) do 
        local random, permits = struct.unpack('Bc0I', v)
        released = released + permits
    end
    
    if released > 0 then 
        -- 移除过期的许可记录
        redis.call('zremrangebyscore', permitsName, 0, tonumber(ARGV[2]) - interval)
        
        if tonumber(currentValue) + released > tonumber(rate) then 
            -- 如果释放后超过了速率限制，重新计算当前值
            local values = redis.call('zrange', permitsName, 0, -1)
            local used = 0
            for i, v in ipairs(values) do 
                local random, permits = struct.unpack('Bc0I', v)
                used = used + permits
            end
            currentValue = tonumber(rate) - used
        else 
            -- 否则直接增加释放的许可数量
            currentValue = tonumber(currentValue) + released
        end
        
        -- 更新当前值
        redis.call('set', valueName, currentValue)
    end
    
    -- 检查是否有足够的许可
    if tonumber(currentValue) < tonumber(ARGV[1]) then 
        -- 许可不足，计算需要等待的时间
        local firstValue = redis.call('zrange', permitsName, 0, 0, 'withscores')
        res = 3 + interval - (tonumber(ARGV[2]) - tonumber(firstValue[2]))
    else 
        -- 许可充足，记录此次使用并减少可用许可
        redis.call('zadd', permitsName, ARGV[2], struct.pack('Bc0I', string.len(ARGV[3]), ARGV[3], ARGV[1]))
        redis.call('decrby', valueName, ARGV[1])
        res = nil
    end
else 
    -- 如果当前值不存在，初始化限流器
    redis.call('set', valueName, rate)
    redis.call('zadd', permitsName, ARGV[2], struct.pack('Bc0I', string.len(ARGV[3]), ARGV[3], ARGV[1]))
    redis.call('decrby', valueName, ARGV[1])
    res = nil
end

-- 处理TTL设置
local ttl = redis.call('pttl', KEYS[1])
if ttl > 0 then 
    redis.call('pexpire', valueName, ttl)
    redis.call('pexpire', permitsName, ttl)
end

return res
```

> Answered By Claude：
>
> ```lua
> redis.call('zadd', permitsName, ARGV[2], struct.pack('Bc0I', string.len(ARGV[3]), ARGV[3], ARGV[1]));
> ```
>
> 这里将三个值打包成一个二进制字符串，
>
> * 格式字符串 'Bc0I'：
>
>   - B：无符号字节（1字节），存储 random 字符串的长度
>
>   - c0：以 null 结尾的字符串，存储 random 值本身
>
>   - I：无符号整数（4字节），存储许可数量
>
> * 实际参数：
>
>   * string.len(ARGV[3])：random 字符串的长度
>   * ARGV[3]：random 字符串（客户端标识）
>   * ARGV[1]：请求的许可数量
>
> ```lua
> -- 示例：
> -- 假设 random = "abc123", permits = 5
> -- pack 后的结果类似于：
> -- [6][a][b][c][1][2][3][\0][0][0][0][5]
> --  ^   ^----- random -----^  ^- permits -^
> --  |                    null
> -- length
> ```



RRateLimiter#availablePermits 部分源码：

```Java
@Override
public RFuture<Long> availablePermitsAsync() {
    return commandExecutor.evalWriteAsync(getRawName(), LongCodec.INSTANCE, RedisCommands.EVAL_LONG,
            "local rate = redis.call('hget', KEYS[1], 'rate');"
          + "local interval = redis.call('hget', KEYS[1], 'interval');"
          + "local type = redis.call('hget', KEYS[1], 'type');"
          + "assert(rate ~= false and interval ~= false and type ~= false, 'RateLimiter is not initialized')"

          + "local valueName = KEYS[2];"
          + "local permitsName = KEYS[4];"
          + "if type == '1' then "
              + "valueName = KEYS[3];"
              + "permitsName = KEYS[5];"
          + "end;"

          + "local currentValue = redis.call('get', valueName); "
          + "if currentValue == false then "
                 + "redis.call('set', valueName, rate); "
                 + "return rate; "
          + "else "
                 + "local expiredValues = redis.call('zrangebyscore', permitsName, 0, tonumber(ARGV[1]) - interval); "
                 + "local released = 0; "
                 + "for i, v in ipairs(expiredValues) do "
                      + "local random, permits = struct.unpack('Bc0I', v);"
                      + "released = released + permits;"
                 + "end; "

                 + "if released > 0 then "
                      + "redis.call('zremrangebyscore', permitsName, 0, tonumber(ARGV[1]) - interval); "
                      + "currentValue = tonumber(currentValue) + released; "
                      + "redis.call('set', valueName, currentValue);"
                 + "end;"

                 + "return currentValue; "
          + "end;",
            Arrays.asList(getRawName(), getValueName(), getClientValueName(), getPermitsName(), getClientPermitsName()),
            System.currentTimeMillis());
}
```