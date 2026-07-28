// console.log(process.version)
// console.log(process.platform)
// console.log(20+30)

// function add (a, b){
//     return a + b;
// }
// console.log(add(20, 50))

// const add = require('./math')
// console.log(add(45, 90))

// const sub = require('./math')
// console.log(sub(45, 90))

// const {add, sub} = require('./math')
// console.log(add(40, 50),sub(80, 50))


const {mul, div} = require('./math')
console.log(mul(40, 50),div(100, 50))