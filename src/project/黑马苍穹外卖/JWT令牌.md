# JWT令牌



**JSON Web Token（JWT）** 

​	用于在网络上安全地传递信息，通过在用户和服务器之间传递的方式来验证身份信息



**JWT的组成**

​	JWT由三部分组成，采用 . 分隔

​	Header（头部）：包含了令牌的类型（JWT）和 使用的加密算法等信息

​	Payload（载荷）：传输的 用户信息 和 其他数据

​	Signature（签名）：由Header、Playload 和 密钥 生成的签名，用于验证令牌的真实性

> JWT令牌在传输时**不会**包括秘钥（secret）
>
> **秘钥（secret）**：用于签名和验证JWT，但不会被包含在JWT本身中。秘钥需要在服务器上安全存储，仅用于生成和验证签名



**JWT的生成**

​	服务端生成JWT时，会将 Header 和 Payload 以 Base64 编码的形式组成形成JWT的前两部分，并使用密钥对JWT进行签名，形成完整的JWT



**JWT的验证**

​	提取信息：从JWT令牌中提取 Header 、Payload 和 签名

​	重现签名：使用与生成 JWT 令牌时相同的算法 、 Header 和 Payload 信息，结合存储在服务端的 密钥（Secret Key），重新计算生成一个新的签名，并与JWT中解析出的签名进行比对

​	检查有效期：验证令牌是否在 有效期内，包括 过期时间（exp）、签发时间（iat）等标准声明	



**JWT的优缺点**

​	优点：

​		跨域传输：JWT能够在不同域之间安全传输信息

​		无状态性：JWT本身包含了用户信息，避免了服务端存储会话状态的需求，提高了横向扩展的能力

​		灵活性：JWT可扩展，能够包含自定义的信息

​	缺点：

​		信息暴露风险：JWT的Payload部分虽然进行了Base64编码，但未加密，可能导致数据泄露

​		不支持过期撤销：JWT一旦签发，就无法主动撤回或修改，存在一定的风险

​	JWT是一种便捷且安全的身份验证方式，在网络通信中被广泛使用，但使用时需要注意安全风险，特别是保护好密钥以及注意有效期的管理



**JWT检验源码粗读**

```java
Jwts.parser()
        // 设置签名的秘钥
        .setSigningKey(secretKey.getBytes(StandardCharsets.UTF_8))
        // 设置需要解析的jwt
        .parseClaimsJws(token).getBody();

//parseClaimsJws()
public interface JwtParser {
    ...;
    
    Jws<Claims> parseClaimsJws(String var1) throws ExpiredJwtException, UnsupportedJwtException, MalformedJwtException, SignatureException, IllegalArgumentException;
    
    ...;
}

//parseClaimsJws()
public class DefaultJwtParser implements JwtParser {
    ...;
    
    public Jws<Claims> parseClaimsJws(String claimsJws) {
        return (Jws)this.parse(claimsJws, new JwtHandlerAdapter<Jws<Claims>>() {
            public Jws<Claims> onClaimsJws(Jws<Claims> jws) {
                return jws;
            }
        });
    }
    
    public <T> T parse(String compact, JwtHandler<T> handler) throws ExpiredJwtException, MalformedJwtException, SignatureException {
        Assert.notNull(handler, "JwtHandler argument cannot be null.");
        Assert.hasText(compact, "JWT String argument cannot be null or empty.");
        Jwt jwt = this.parse(compact);
        if (jwt instanceof Jws) {
            Jws jws = (Jws)jwt;
            Object body = jws.getBody();
            return body instanceof Claims ? handler.onClaimsJws(jws) : handler.onPlaintextJws(jws);
        } else {
            Object body = jwt.getBody();
            return body instanceof Claims ? handler.onClaimsJwt(jwt) : handler.onPlaintextJwt(jwt);
        }
    }
    
    public Jwt parse(String jwt) throws ExpiredJwtException, MalformedJwtException, SignatureException {
        ...;
        
        String jwtWithoutSignature = base64UrlEncodedHeader + '.' + base64UrlEncodedPayload;
        JwtSignatureValidator validator;
        
        if (!validator.isValid(jwtWithoutSignature, base64UrlEncodedDigest)) {
                        String msg = "JWT signature does not match locally computed signature. JWT validity cannot be asserted and should not be trusted.";
                        throw new SignatureException(msg);
                    }
        
        ...;
    }
    
    ...;
}
```