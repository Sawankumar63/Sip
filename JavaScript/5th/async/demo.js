function greet(){
    return new Promise((res, rej)=>{
        let deliverd = false;
        if(deliverd){
            res("Deliverd ho gaya")
        }else{
            rej("Deliverd nahi hua")
        }
    })
}


async function print(){
    //const msg = await greet();
   // console.log(msg)
   //console.log("Hello");


   try{
    const msg = await greet()
    console.log("msg");
    console.log("hello");
   }catch(err){
    console.log("yahi hai",err);
   }
}
print()



//2nd

function login(email,password){
    return new Promise((res, rej) =>{
        console.log("Aapke credentials verify ho rahe hai.. thoda wait kre !!");

        setTimeout(() =>{
            if(email == "test@gmail.com" && password == "123456789"){
                res({
                    id:1,
                    name: "Test"
                })
            }else{
                rej("Invailed Credentials")
            }
        },3000)
    })
}

async function sawan() {
    try{
        const msg = await login("test@gmail.com","123456789")
        console.log(msg);
        console.log("hi");
    }catch(err){
        console.log("yahi hai", err);
    }
}
sawan()