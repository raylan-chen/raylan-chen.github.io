---
title: 30.包含min函数的栈
category:
  - Algorithm
---

# 30.包含min函数的栈



## 参考链接

[剑指offer_在线编程 - 牛客网](https://www.nowcoder.com/exam/oj/ta?page=1&tpId=13&type=265)

[剑指 Offer 30. 包含min函数的栈-跟着帅地玩转校招，刷爆各类算法题 - 帅地玩Offer](https://www.playoffer.cn/552.html)

[LCR 147. 最小栈 - 力扣（LeetCode）](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/description/)



## 个人题解

思路：

使用两个ArrayList来存储元素（本来想使用数组，但是一看push最多被调用3*10^4次，那我数组不得一次性申请这多么空间 或者 要动态扩容，于是选择ArrayList）

top记录栈顶位置

nums存储栈的元素

min存储栈顶元素进栈时，栈内最小元素的索引



push时，

判断栈内是否有元素

​	无元素，则直接进栈，`min.add(0)`

​	有元素

​		则判断是否小于`nums.get( min.get(top) ) //先获取栈顶元素进栈时的最小元素索引，再与x对比` 

​			大于则 照搬 前一个栈顶元素的最小元素索引

​			小于则`top++; min.add(top)` 

```java
class MinStack {
    public static int top;
    public static List<Integer> nums;
    public static List<Integer> min;

    /** initialize your data structure here. */
    public MinStack() {
        top = -1;
        //栈
        nums = new ArrayList<>();
        //min存着栈顶元素进栈时的最小值索引
        min = new ArrayList<>();
    }
    
    public void push(int x) {
        //栈为null
        if (top == -1) {
            top++;
            min.add(0);
            nums.add(x);
        } else {
            //栈顶元素进栈时的最小值索引
            int minIndex = min.get(top);
            // x 大于 栈内最小值
            if (nums.get(minIndex) < x) {
                top++;
                nums.add(x);
                min.add(minIndex);
            } else { //x 小于 栈内最小值
                top++;
                nums.add(x);
                min.add(top);
            }
        }
    }
    
    public void pop() {
        nums.remove(top);
        min.remove(top);
        top--;
    }
    
    public int top() {
        return nums.get(top);
    }
    
    public int getMin() {
        //min存着栈顶元素进栈时的最小值索引
        return nums.get(min.get(top));
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
```



## 优秀题解

```java
class MinStack {
    Stack<Integer> A, B;
    public MinStack() {
        A = new Stack<>();
        B = new Stack<>();
    }
    public void push(int x) {
        A.add(x);
        if(B.empty() || B.peek() >= x)
            B.add(x);
    }
    public void pop() {
        if(A.pop().equals(B.peek()))
            B.pop();
    }
    public int top() {
        return A.peek();
    }
    public int getMin() {
        return B.peek();
    }
}

作者：Krahets
链接：https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/solutions/133760/mian-shi-ti-30-bao-han-minhan-shu-de-zhan-fu-zhu-z/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

优秀题解中，并没有存储每个栈顶元素进栈时对应的最小元素下标，而是直接存储元素，采用一个辅助栈来存储 主栈 的非严格降序 元素的序列，这样貌似更节省空间，也不用获取最小元素时先获取下标再取值
