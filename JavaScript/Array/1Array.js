let arr = [1,2,4,6,0,9];
console.log(arr)

arr.forEach(i=>{
    console.log(i)
});


console.log("Before push Operation: "+ arr)
arr.push(20)
arr.push(22)
console.log("After push Operation: "+ arr)


console.log("Before pop Operation: "+ arr)
arr.pop()
console.log("After pop Operation: "+ arr)

arr.unshift(30)
console.log("After unshift Operation: "+ arr)

arr.shift()
console.log("After shift Operation: "+ arr)






