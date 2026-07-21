function waiter(){
    console.log("Waiter: Yes i am comming ......")
    console.log("Waiter: yes sir , what you want .....")
}
function customer (waiter){
    console.log(" Customer : Waiter bhai..")
    waiter()
}
customer(waiter)