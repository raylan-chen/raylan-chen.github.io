---
title: 8 入门篇：LuaJIT 分支和标准 Lua 有什么不同？
category:
  - Gateway
order: 8
---

## 思维导图
![](./images/20250311_2337106471.png)


## 实践
```bash
root@DESKTOP-42B4J2H:~# resty -e 't = {100}; ngx.say(t[0])'
2025/01/28 16:06:50 [warn] 582#582: *2 [lua] _G write guard:12: __newindex(): writing a global Lua variable ('t') which may lead to race conditions between concurrent requests, so prefer the use of 'local' variables
stack traceback:
        (command line -e):1: in function 'inline_gen'
        init_worker_by_lua(nginx.conf:130):44: in function <init_worker_by_lua(nginx.conf:130):43>
        [C]: in function 'xpcall'
        init_worker_by_lua(nginx.conf:130):52: in function <init_worker_by_lua(nginx.conf:130):50>, context: ngx.timer


root@DESKTOP-42B4J2H:~# resty -e 't = {100}; ngx.say(type(t[0]))'
2025/01/28 16:07:46 [warn] 802#802: *2 [lua] _G write guard:12: __newindex(): writing a global Lua variable ('t') which may lead to race conditions between concurrent requests, so prefer the use of 'local' variables
stack traceback:
        (command line -e):1: in function 'inline_gen'
        init_worker_by_lua(nginx.conf:130):44: in function <init_worker_by_lua(nginx.conf:130):43>
        [C]: in function 'xpcall'
        init_worker_by_lua(nginx.conf:130):52: in function <init_worker_by_lua(nginx.conf:130):50>, context: ngx.timer
nil


root@DESKTOP-42B4J2H:~# $ resty -e 't={100}; ngx.say(t[0])'
$: command not found


root@DESKTOP-42B4J2H:~# reaty -e 't={100}; ngx.say(type[0])'
reaty: command not found


root@DESKTOP-42B4J2H:~# resty -e 't={100}; ngx.say(type[0])'
2025/01/28 16:08:33 [warn] 1015#1015: *2 [lua] _G write guard:12: __newindex(): writing a global Lua variable ('t') which may lead to race conditions between concurrent requests, so prefer the use of 'local' variables
stack traceback:
        (command line -e):1: in function 'inline_gen'
        init_worker_by_lua(nginx.conf:130):44: in function <init_worker_by_lua(nginx.conf:130):43>
        [C]: in function 'xpcall'
        init_worker_by_lua(nginx.conf:130):52: in function <init_worker_by_lua(nginx.conf:130):50>, context: ngx.timer
ERROR: (command line -e):1: attempt to index global 'type' (a function value)
stack traceback:
        init_worker_by_lua(nginx.conf:130):44: in function <init_worker_by_lua(nginx.conf:130):43>
        [C]: in function 'xpcall'
        init_worker_by_lua(nginx.conf:130):52: in function <init_worker_by_lua(nginx.conf:130):50>


root@DESKTOP-42B4J2H:~# resty -e 't={100};ngx.say(type(t[0]))'
2025/01/28 16:08:54 [warn] 1099#1099: *2 [lua] _G write guard:12: __newindex(): writing a global Lua variable ('t') which may lead to race conditions between concurrent requests, so prefer the use of 'local' variables
stack traceback:
        (command line -e):1: in function 'inline_gen'
        init_worker_by_lua(nginx.conf:130):44: in function <init_worker_by_lua(nginx.conf:130):43>
        [C]: in function 'xpcall'
        init_worker_by_lua(nginx.conf:130):52: in function <init_worker_by_lua(nginx.conf:130):50>, context: ngx.timer
nil


root@DESKTOP-42B4J2H:~# resty -e 'print("hello")'
hello


root@DESKTOP-42B4J2H:~# resty -e 'local t={100};ngx.say(type(t[0]))'
nil


root@DESKTOP-42B4J2H:~# resty -e '
> local color = {first = "red", "blue", third = "green", "yellow"}
> print(color["first"])
> print(color[1])
> print(color["third"])
> print(color[2])
> print(color[3])
> '
red
blue
green
yellow


root@DESKTOP-42B4J2H:~# resty -e '
> local t1 = {1, 2, 3}
> print("Test1" .. table.getn(t1))'
Test13


root@DESKTOP-42B4J2H:~# resty -e '
> local t2 = {1, a = 2, 3}
> print("Test2 ".. table.getn(t2))
> '
Test2 2


root@DESKTOP-42B4J2H:~# resty -e '
> local t3 = {1, nil}
> print("Test3 " .. table.getn(t3))
> '
Test3 1


root@DESKTOP-42B4J2H:~# resty -e '
> local ffi = require("ffi")
> ffi.cdef[[
> int printf(const char *fmt, ...);
> ]]
> ffi.C.printf("Hello %s!", "world")
> '
Hello world!
```

