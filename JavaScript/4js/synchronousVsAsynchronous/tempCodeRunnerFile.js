let count = 8
let time = setInterval(() => {
    console.log("Bhaago bum phootne waala hai")
    console.log(count);
    count--;
    if(count < 1) {
        clearInterval(time)
        setTimeout(() => {
            console.log("Bum phoot gaya");
            // alert("Bum phoot gaya");
        }, 9000)
    }
}, 1000)