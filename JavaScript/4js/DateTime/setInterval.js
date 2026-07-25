//setInterval(callback ,delay)

setInterval(function (){
    console.log("Time se class aao");
},100)



// CountDwon
let count = 10;
let time = setInterval(() => {
    console.log(count);
    count--;
    if(count < 0){
        clearInterval(time)
    }
},1000)



// digital Clock
setInterval(() => {
    const time = new Date()
    console.log(time.toLocaleDateString(),time.toLocaleTimeString());
},1000)

