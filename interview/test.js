
let i = 0
setTimeout(()=>console.log(i), 100)

for (let j=0;j<10000000;j++){
    i++;
}

// 每 2 秒重复一次
let timerId = setInterval(() => console.log('tick'), 2000);

// 5 秒之后停止
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);
