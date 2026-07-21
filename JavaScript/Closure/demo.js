function init(){
    var name = "Morgilla"
    function displayName(){
        console.log(name)
    }
    displayName()
}
init()




function outer(){
    var x = 1;
    function inner(){
        x++
        console.log(x)
    }
    inner()
}
outer()
outer()




function outer(){
    let x =1;
    console.log(x);
    function inner(){
        x++;
        console.log(x);
    }
    return inner
}
const ans =outer();
ans()
ans()
ans()
ans()
ans()
ans()
ans()





function grandfather() {
    var x=1
    return function patent() {
        x++;
        return function child() {
            x++
            console.log(x);
        }
    }
}

const ans = grandfather();
const ans1 = ans();
ans1()
ans1()
ans1()
