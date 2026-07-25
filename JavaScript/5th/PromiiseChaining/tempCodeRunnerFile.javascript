
function loginUser(){
    return new Promise((res, rej) => {
        console.log("Aap login ho rahe.....");

        setTimeout(() =>{
            console.log("Aap login ho gaya");
            res()
        },1000) 
    })
}

function getProfile(){
    return new Promise((res, rej) => {
        console.log("Aapki profile fetch ho rahi hai ...");
    
        setTimeout(()=>{
            console.log("Aapki profile fatch ho chuki hai");
            res()
        },3000)  
   })
    
}


function getOrder(){
    return new Promise((res, rej) => {
        console.log("Appka order ready ho raha hai .....");
         setTimeout(()=>{
             console.log("Aapka order ready ho chuka hai ");
             res()  
            },2000)
            
    })
}

function payment() {
    return new Promise((res, rej) =>{
        console.log("Payment process ho rahi hai ...");
        setTimeout(()=> {
            console.log("Payment Successfull.......");
            res()
        },3000)
        
    })
   
}


loginUser()
.then(()=>{
   return getProfile()
})
.then(()=>{
    return getOrder()
})
.then(()=>{
    return payment()
})
.catch((err)=>{
    console.log("Kuchh ro gadbad hai daya  Socho socho......");
})