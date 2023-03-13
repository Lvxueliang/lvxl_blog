---
slug: 题目
title: 题目
authors: [Lvxl]
tags: [题目]
---

# 试题

考点: this 
```js
window.onload = function() {
    var length = 1;
    function fn() {
        console.log(this.length)
    }
    var obj = {
        length: 100,
        action: function(callback) {
            callback();
            arguments[0]();
        }
    }

    var arr = [1,2,3,4]
    obj.action(fn, ...arr)

    // 结果:
}

```

考点 事件循环
```js

setTimeout(() => {
    console.log(100)
},0)

new Promise((resolve, reject) => {
    resolve()
}).then(() => {
    console.log(200)
}) 

function f() {
    console.log(300)
}

async function f2 () {
    await f()
    console.log(400)
}
f2()


//  300 -> 200 -> 400 -> 100
// 思路: 
// 1. settimeout100 加入到宏任务队列
// 2. promise.then() 加入到微任务队列
// 3. f2() 执行
// 4. await f()执行 输出 300
// 5. await 下面的 400 加入到微任务队列
// 6. 开始下一次循环 先执行微任务队列先进先出原则 输出 200
// 7. 继续执行微任务队列里面的任务 400
// 8. 最后执行宏任务 100
```

考点 作用域
```js

var a = 10     
var obj = {   
    a: 99,
    f: test
}
function test() {
    console.log(a)   
    a = 100
    console.log(this.a) 
    var a 
    console.log(a)
}
obj.f()

```

```js

var a = 10
function f1 () {
    var b = 2 *a:
    var a =  20;
    var c = a + 1
    console.log(b)
    console.log(c)
}
f1()

// go: a f1    => undefind
// vo: b a c 
//     b = 2 * undefind  => NaN
//     a = 20
//     c = 20 + 1
//     b = NaN
//     c = 21
```

考点: js计算精度问题
```js

// 对于这个问题，一个直接的解决方法就是设置一个误差范围，通常称为“机器精度”。对JavaScript来说，这个值通常为2-52，在ES6中，提供了Number.EPSILON属性，而它的值就是2-52，只要判断0.1+0.2-0.3是否小于Number.EPSILON，如果小于，就可以判断为0.1+0.2 ===0.3

function numberepsilon(arg1,arg2){                   
  return Math.abs(arg1 - arg2) < Number.EPSILON;        
}        

console.log(numberepsilon(0.1 + 0.2, 0.3)); // true
```