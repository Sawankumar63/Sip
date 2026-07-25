
const orderFood = new Promise((resolve , reject )=>{
    const deliverd = true;
    if(deliverd){
        resolve("Food Delivered")
    }else{
        reject("Order Cancelled")
    }
})



orderFood.then((res) =>console.log(res)
)
.catch((error) => {
    console.log(error);
})






let connection = new Promise((res , rej) =>{
    console.log("Connect ho raha hai database se ");
    console.log("Thoda wait kro..... ");
    setTimeout(() => {
        res("Connect ho gaya😊😍💕")
    },3000)
})

connection
.then((msg) => {
    console.log(msg,"Mera promise fuilfilled ho gya hai ");
})
.catch(() => {
    console.log("promise reject ho gai.....");
})






//2nd Way

new Promise((res , rej) =>{
    console.log("Connect ho raha hai database se ");
    console.log("Thoda wait kro..... ");
    setTimeout(()=> {
        res("Connect ho gaya😊😍💕")
    },3000)
})

.then(() => 
    console.log("Mera promise fuilfilled ho gya hai ")
)
.catch(()=>
   console.log("promise reject ho gai.....")
)



//3rd way

function connection(){
    return new Promise((res , rej)=>{
         console.log("Connect ho raha hai database se ");
         console.log("Thoda wait kro..... ");
         setTimeout(()=>{
            res("connect ho gaya")
        },3000)
    })
}

connection()
    .then((msg) => {
        console.log(msg, "Mera Promise fullfilled ho gaya hain");
    })
    .catch(() => {
        console.log("Promis reject ho gai.....");
    })