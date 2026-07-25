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


// login("test@gmail.com", "123") 
// .then((userData) => {
//     // console.log(userData);
//     return userData;
// })
// .then((data) => {
//     console.log(data)
//     return data.name
// })
// .then((info) => {
//     console.log(info)
// })
// .catch((err) => {
//     console.log(err)
// })

login("test@gmail.com","123456789")
.then((userData)=>{
    //console.log(userData);
    return userData;
})
.then((data) =>{
   // console.log(data);
    return data.name
})
.then((info) =>{
   // console.log(info);
    return info.name;
})
.then((err) =>{
    console.log(err);
})