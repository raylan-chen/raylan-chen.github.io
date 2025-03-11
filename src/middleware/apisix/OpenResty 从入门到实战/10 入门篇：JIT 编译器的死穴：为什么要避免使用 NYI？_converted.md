---
title: 10 入门篇：JIT 编译器的死穴：为什么要避免使用 NYI？
category:
  - Gateway
order: 10
---

## 思维导图
![](./images/20250311_2337302055.png)

## 专业术语
🔶NYI

Not Yet Implemented，JIT 编译器不支持的原语操作，JIT 编译器在当前代码路径上遇到 NYI 时，会退回到解释器模式，导致性能下降。

## 实践
```bash
root@DESKTOP-42B4J2H:/opt/lua# echo 'local a = 0 for i = 1, 1e8 do a = a + 1 end print(a)' > bench.lua
root@DESKTOP-42B4J2H:/opt/lua# ls
1.lua  bench.lua
root@DESKTOP-42B4J2H:/opt/lua# cat bench.lua
local a = 0 for i = 1, 1e8 do a = a + 1 end print(a)
root@DESKTOP-42B4J2H:/opt/lua# time resty -joff bench.lua
100000000

real    0m0.628s
user    0m0.612s
sys     0m0.009s
root@DESKTOP-42B4J2H:/opt/lua# time resty bench.lua
100000000

real    0m0.102s
user    0m0.081s
sys     0m0.008s
root@DESKTOP-42B4J2H:/opt/lua# resty -jv bench.lua
[TRACE   1 bench.lua:1 loop]
100000000
root@DESKTOP-42B4J2H:/opt/lua# resty -jdump bench.lua
---- TRACE 1 start bench.lua:1
0006  ADDVN    0   0   1  ; 1       (bench.lua:1)
0007  FORL     1 => 0006       (bench.lua:1)
---- TRACE 1 IR
0001    int SLOAD  #3    I
0002 >  int SLOAD  #2    T
0003 >+ int ADDOV  0002  +1
0004  + int ADD    0001  +1
0005 >  int LE     0004  +100000000
0006 ------ LOOP ------------
0007 >+ int ADDOV  0003  +1
0008  + int ADD    0004  +1
0009 >  int LE     0008  +100000000
0010    int PHI    0004  0008
0011    int PHI    0003  0007
---- TRACE 1 mcode 93
7f816496ffa3  add rsp, -0x10
7f816496ffa7  mov dword [r14-0xef8], 0x1
7f816496ffb2  mov ebx, [rdx+0x8]
7f816496ffb5  cmp dword [rdx+0x4], 0xfff90000
7f816496ffbc  jnz 0x7f816496004c        ->0
7f816496ffc2  mov ebp, [rdx]
7f816496ffc4  add ebp, +0x01
7f816496ffc7  jo 0x7f816496004c ->0
7f816496ffcd  mov [rsp+0x8], ebp
7f816496ffd1  add ebx, +0x01
7f816496ffd4  cmp ebx, 0x05f5e100
7f816496ffda  jg 0x7f8164960050 ->1
->LOOP:
7f816496ffe0  mov [rsp+0x8], ebp
7f816496ffe4  mov r15d, ebp
7f816496ffe7  add ebp, +0x01
7f816496ffea  jo 0x7f8164960054 ->2
7f816496fff0  add ebx, +0x01
7f816496fff3  cmp ebx, 0x05f5e100
7f816496fff9  jle 0x7f816496ffe0        ->LOOP
7f816496fffb  jmp 0x7f8164960058        ->3
---- TRACE 1 stop -> loop

100000000
```

