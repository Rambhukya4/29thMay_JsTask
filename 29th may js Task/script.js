//functions in js_task

//function declaration:
// function declarations always have a name. Function declarations are hoisted to the top of their scope, whereas function expressions are not.
// function declaration without arguments
function person(){
    let name="Ram";
    let age = 25;
    let study = "BTech in civil engineering";
    let collage = "Vidyajyothi institute of technology";

    console.log(`My name is ${name}, Iam ${age} years Old, I completed my bachelors degree in ${study}, from ${collage} `);
}
person()


// function declaration with arguments

function person1(name, age=25, study, collage){
    console.log(`My name is ${name}, Iam ${age} years Old, I completed my bachelors degree in ${study}, from ${collage} `);

}
person1("Ram",25,"BTech in civil engineering", "Vidyajyothi institute of technology" )






//function expression
let mySelf=function(){
    let name="Ram";
    let age = 25;
    let study = "BTech in civil engineering";
    let collage = "Vidyajyothi institute of technology";

    console.log(`My name is ${name}, Iam ${age} years Old, I completed my bachelors degree in ${study}, from ${collage},"Hyderabad" `);
}
mySelf()



// function expression with arguments

let abtMe= function(name,  study, collage, age=25,){
    console.log(`My name is ${name}, Iam ${age} years Old, I completed my bachelors degree in ${study}, from ${collage} `);
    // return 0;
}
abtMe("Ram","BTech in civil engineering", "Vidyajyothi institute of technology" );
// let returnValue = abtMe("Ram", "BTech in civil engineering", "Vidyajyothi Institute of Technology");
// console.log("Return value:", returnValue); 






//arrow functions

let myIntro=() =>{
    let name="Ram";
    let age = 25;
    let study = "BTech in civil engineering";
    let collage = "Vidyajyothi institute of technology";

    console.log(`My name is ${name}, Iam ${age} years Old, I completed my bachelors degree in ${study}, from ${collage} `);
    // return 0;
}
myIntro()
// let returnValue = myIntro("Ram", "BTech in civil engineering", "Vidyajyothi Institute of Technology");
// console.log("Return value:", returnValue);






myHeading = document.getElementById("js")
// console.log(myHeading);
// let num=1;
function changeName(){
    // num++
// console.log('i clicked a button',num);

myHeading.textContent="React.js";
}





console.log( x);
let x= 5;  