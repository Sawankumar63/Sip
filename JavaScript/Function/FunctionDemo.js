function sunstone(){
    console.log("Welcome Bihar")
}
sunstone();

// parameters and Argument
function sunstone2(batch){
    //console.log("Welcome to 100% placed" + batch + "batch")
    console.log(`Welcome to 100% placed ${batch} batch`)
}
sunstone2(2027)

function sunstone3(course , batch){
    //console.log("Welcome to 100% placed" + batch + "batch")
    console.log(`Welcome to 100% placed ${course} - ${batch} batch`)
}
sunstone3("MCA",2027)


// return type function
function totalStudent(MCA , BCA , BETCH , MBA){
    return MCA + BCA + BETCH + MBA;
}
console.log(totalStudent(112,267,100,35))

function students(Name , Course ,Betch ,Id){
    return Name + Course + " "+Betch + " " + Id;
}
console.log(students("Sawan Kumar ","MCA", 2025 ,1001))

function students(name, course, batch, id) {
    return `My name is ${name} and course is ${course} and batch is ${batch} and ID is ${id}.`;
}

console.log(students("Sawan Kumar", "MCA", "2025-2027", 1001));



const sunstone = () => console.log("Welcome to Bihar")
sunstone()

const sunstone = () =>{
  console.log("Welcome to Bihar")
}
sunstone()


