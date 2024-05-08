---
sidebar_position: 1
---


# java

### java垃圾回收
java消除了程序员回收无用内存空间的职责,在jvm的空闲时, 检查并释放可被释放的存储器空间, 相比较c++开发人员需要自己会瘦无用内存
1. 垃圾收集器有几种
2. 垃圾收集器底层原理剖析
3. 垃圾收集器算法,优化

### java跨平台原理
原文件: hellworld.java => 编译 => 字节码文件: helloworld.class -> 解释并执行 java.exe -> 调用jvm虚拟机

### 代码注释
```java
    // 下面代码是一段标准代码
    /*
        这是多行注释
        每行都可以写
    */
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("hi....java")
        }
         /**
             文档注释
            @author Lvxl
            @version 1.0
            @param name 姓名
            @param age 年龄
        */
       public void eat(String name, int age) {
            System.out.printIn("hello")
       }
    }

   

```

### 数据类型
基本数据类型: 
- 数值: 
    1. byte, short, ini, long
    2. float, double
- 字符: char
- 布尔: boolean
引用数据类型
- 类: class
- 接口: interface
- 数组: 


### 数据类型转换
```java
    int i = (int)6.5   // double --- > int 强制类型转换 
    int k = '中'     // 会转换成 unicode编码
    // 多种数据类型参与运算, 唯独布尔类型不能参与运算
    double d2 = 12 + 129L + 8.5F + 3.81 + 'a'

    //类型级别:
    // byte -> short -> char -> int -> long -> float -> double
    // 当一个表达式中 有多种数据类型是, 要找出当前表达式中最高的那个类型, 然后其余类型都转换成当前表达式基本中最高类型进行计算
``` 

### final修饰符
final 一个变量被final修饰后, 这个变量就变成了一个常量, 不可变. 约定俗成, 常量大写