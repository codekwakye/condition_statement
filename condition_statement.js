// if and else statement always use three equal to sign 
// you can have multiple else if but one if and one else 

const age =18;

if (age === 18){
console.log("You Can Vote For One Person");
} else if (age > 18){
    console.log("You can vote for two people");
}else {
    console.log("Ypu can't vote");
}


// example 2 
// % checks the reminder
const number = 20;

if (number % 2 === 0){
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

//example 3
// system to check for a leap year 
// ! means not, && means and 
 
const year =2024;

if (year % 4 === 0 && year % 100 !== 0) {
    console.log("Is a leap year");
} else {
    console.log("Is not a leap year");
}

// if and else logic that check a reminder 

const x = 10;
const Y = 3;

if (x % y !== 0) {
    console.log( "has a remainder.");
} else {
    console.log( "has no remainder.");
}


// Tenary operators
//? if the condition is true thats the reason why we used ? (? true) if statement
// : represnt false (: false) else statement

const number1 =12;
 const isNumber = 
 number1 >12 ? "number is greater than 12": "number is less than 12 ";
 console.log(number1);


 // example 2

 const number3 =15;
 const result =
 number % 2 === 0 ? "Even" : number % 3 ===0 ? "Divisible by 3" : "odd" ;
 console.log(number3);


 // nested if staement 
 if (kwame= 12 && n === "kofi"  &&  n.typeOf() === "stright"){
    console.log("You're a student");
 } else{
    console.log("You're not a student");
 }


// function to check for a leap year using if and else statement 
// it works only in functions


function checkForLeapYear(number4){
    if (number4 % 4 === 0 && number4 % 100 !== 90){
        return true;
    }
    return false;
}

const isLeap = checkForLeapYear(2023);

console.log(isLeap);