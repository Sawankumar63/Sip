const cart = [{price : 500 },
    {price : 1000}
];
const total = cart.reduce((sum,item) => {
    return sum + item.price;
},0);
    console .log(total)
