async function call() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/todos")
        data = await data.json();
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
}
call();