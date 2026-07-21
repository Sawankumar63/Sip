const nums = [10,20,30]
const sum = nums.reduce((acc , curr) => {
    return acc+curr;
},0)
console.log(sum)
console.log(nums)




const cart = [{price : 500 },
    {price : 1000}
];
const total = cart.reduce((sum,item) => {
    return sum + item.price;
},0);
    console .log(total)


