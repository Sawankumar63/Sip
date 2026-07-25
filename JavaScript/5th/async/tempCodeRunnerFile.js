
function verifyNumber(num){
    return new Promise((res , rej)=>{
        console.log("Aapka number verify ho raha .. kripya wait kijiye ");
        setTimeout(()=>{
            if(num == 6363695985){
                console.log("Number Verified , OTP sent your mobile");
                res(87347)
            }else{
                rej("Invalid Phone number")
            }
        },2000)
    })
}

function verifyOTP(userOTP, actualOTP){
    return new Promise((res, rej) =>{
        console.log("Aapka otp verify ho raha .. kripya wait kijiye");
        setTimeout(() =>{
            if(userOTP == actualOTP){
                console.log("Aapka Swagat hai hamare pariwar me ");
                res();
            }else{
                console.log("Aap paraye ho");
            }
        })
    })
}


async function sawan() {
    try{
        const msg = await verifyNumber(6363695985)
        await verifyOTP(87347, msg)
        
    }catch(err){
        console.log( err);
    }
}
sawan()