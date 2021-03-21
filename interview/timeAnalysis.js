console.log(1);

const promise = new Promise(resolve => {
    console.log(2);
    resolve();
    console.log(3);
});

async function foo() {
    console.log(4);
    await promise;
    console.log(6);
}

foo();

promise.then(()=>{
    console.log(7);
});

setTimeout(()=>{
    console.log(8)
});
console.log(5)



/**
 1.宏任务、微任务先后执行顺序， Promise以及 async中哪些部分是同步，哪些部分是异步？

 2.还有哪些时序相关的函数？ setinterval

 浏览器端： requestanimationframe、 requestldle Callback;
 Node端： setlmmediate、 nexttick;
 分别有什么区别？如何实现 Polyfit?

 3.如何实现 Promise;
 async函数编译ES5代码时会变成什么？
 Vue的 nexttick如何实现的？

 4.Node的事件循环流程
 是否了解过 queuemicrotask函数。

 **/
