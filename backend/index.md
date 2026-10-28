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
final 中文意思：最后的，最终的。
final 可以修饰类，属性，方法和局部变量。
在某些情况下，程序员可能有以下需求，就会用到final
1. 当不希望类继续继承时， 可以用final修饰
2. 当不希望父类的某个方法呗子类覆盖/重写（override）时，可以使用final
3. 当不希望类的某个属性的值被修改，可以用final
4. 当不希望某个局部变了被修改，可以使用final

细节
1. final修饰的属性又叫常量，一般用 XX_XX_XX 命名
2. final修饰的属性是在定义的时候，必须赋初值，并且以后不能修改，赋值可以在：
   - 定义时： 如 public final double TAX_RATE=0.08;
   - 在构造器中
   - 在代码块中
3. 如果final修饰的属性时静态的。则初始化的位置只能是 1定义时，2在静态代码块   不能在构造器中赋值
4. final类不能继承，但是可以实例化对象
5. 如果类不是final类， 但是含有final方法，则该方法虽然不能重写，但是可以被继承。
