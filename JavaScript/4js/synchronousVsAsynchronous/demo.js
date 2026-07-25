// js behave Synchronously

console.log("morning");
console.log("Afternoon");
console.log("Evning");


function greet(){
    console.log("Hello");
}
greet()
function greet2(){
    console.log("Hello Dosto");
}
greet2()


//js behave as Asynchronously

console.log("morning");
console.log("Afternoon");
console.log("Evning");

setTimeout(() => {
    console.log("Rishav padh lo");
},3000)

setTimeout(() => {
    console.log("rohan khana pel do ");
},1000)

let count = 8
let time = setInterval(() => {
    console.log("Bhago bum futne wala hai ");
    console.log(count);
    count--;
    if(count > 1){
        clearInterval(time)
        setTimeout(() => {
            console.log("Bum phoot gaya");
        },900)
    }
},1000)

let count = 8
let time = setInterval(() => {
    console.log("Bhaago bum phootne waala hai")
    console.log(count);
    count--;
    if(count < 1) {
        clearInterval(time)
        setTimeout(() => {
            console.log("Bum phoot gaya");
            // alert("Bum phoot gaya");
        }, 9000)
    }
}, 1000)


function greet2(){
    console.log("Helo guys");
}
greet2()

function greet3(){
    console.log("Hello friends");
}
greet3

console.log("Good nigth");

