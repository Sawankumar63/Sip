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
