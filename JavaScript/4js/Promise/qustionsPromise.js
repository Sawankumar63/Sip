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

login("test@gmail.com","123456789")
.then((userData)=> {
    console.log(userData.id,userData.name);
})
.catch((err)=> {
    console.log(err);
})