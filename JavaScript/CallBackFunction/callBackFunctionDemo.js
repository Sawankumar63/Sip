
// function processUser() {
//     function greet() {
//         console.log("Hello")
//     }
//     greet()
// }
// processUser()


// function greet() {
//     console.log("Hello")
// }
// function processUser(greet) {
//     greet()
// }
// processUser(greet)


 function greet() {
        console.log("Hello")
 }

 function processUser (callback,name){
    callback();
    return name;

 }
 processUser(greet,"Sawan");
 console.log(processUser(greet,"Sawan"))



 function paymentSuccess(){
    console.log("PaymentSuccessful")
 }

 function paymentProcessing(amount , msg){
    console.log(`${amount}  atm deducted from your account`);
    msg();
 }
 paymentProcessing(12000,paymentSuccess)




 const products = [
    {
    id: 1,
    name:"Laptop",
    price :65000,
    },

    {
    id: 2,
    name:"onepluse 10R",
    price :40000,
    },

     {
    id: 3,
    name:"broken",
    price :2000,
    },

     {
    id: 4,
    name:"realme",
    price :5000,
    },
 ]

// console.log(products)
// console.log(products[0].id)

//  products.forEach(i=>{
//     console.log(i.id,i.name,i.price)
//  })

 for (let i = 0; i < products.length; i++) {
    console.log(products[i].id, products[i].name, products[i].price);
}



function waiter(){
    console.log("Waiter: Yes i am comming ......")
    console.log("Waiter: yes sir , what you want .....")
}
function customer (waiter){
    console.log(" Customer : Waiter bhai..")
    waiter()
}
customer(waiter)


function customer_order() {
    console.log(" Customer : Noodles")
}
function chef(){
    console.log()
}



function customer() {
    console.log(" Customer : Waiter bhai...");
}

function waiter(callback) {
    console.log(" Waiter : Yes sir, aa raha hoon...");
    console.log("Waiter : Sir, aap kya khayenge ?");
    callback();     
}

function customer_order(callback) {
    console.log(" Customer : Mujhe Noodles khana hai.");
    callback();     
}

function chef() {
    console.log(" Chef : Noodles bana raha hoon...");
    console.log(" Chef : Noodles ready hai.");
  
}

function waiter(){

}

customer();

waiter(function () {
    customer_order(function () {
        chef();
    });
});





function customer() {
    console.log(" Customer : Waiter bhai...");
}

function waiter(callback) {
    console.log(" Waiter : Yes sir, aa raha hoon...");
    console.log(" Waiter : Sir, aap kya khayenge?");
    callback();
}

function customer_order(callback) {
    console.log(" Customer : Mujhe Noodles khana hai.");
    callback();
}

function chef(callback) {
    console.log(" Waiter : Chef, ek Noodles bana dijiye.");
    console.log(" Chef : Okay, abhi banata hoon...");
    console.log(" Chef : Noodles bana raha hoon...");
    console.log(" Chef : Noodles ready hai.");
    console.log(" Chef : Waiter, ye lijiye Noodles.");
    callback();
}

function serveCustomer() {
    console.log(" Waiter : Sir, ye lijiye aapka Noodles.");
    console.log(" Waiter : Enjoy your food!");
    console.log(" Customer : Thank you!");
}



customer();

waiter(function () {
    customer_order(function () {
        chef(function () {
            serveCustomer();
        });
    });
});