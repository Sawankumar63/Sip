let resume = {
    name : "Simran",
    age:20,
    course:"MCA",
    sem : 3,
    skills: "Deprisson , tension lena",
    greet : function(){
        console.log("Hello , this is real world")
    }

}

//Print object 
//console.log(resume)

//get value
console.log(resume.age)

//or 
console.log(resume["age"])

//Update value
resume.skills= "HardWorker , Cricket"
console.log(resume.skills)