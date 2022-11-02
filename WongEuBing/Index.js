// Summing 2 and 3
// console.log(2 + 3)
// console.log(null);
// console.log(undefined);

//array
// console.log(['a', 'b', 'c']);

//object
// console.log({courseName: "JavaScript"});

// //function
// function loghello(){
//     console.log("Hello")
// }

//let
// let myfirstVar = "Hello";

// console.log(myfirstVar)

// //let means new value will overwrite old value if same line???
// let animal = "a"; animal = "b";
// console.log(animal)

//const means value cannot be overwritten
// const animal = "a"; animal = "b";
// console.log(animal)

//const
// const COURSE = "JS Development"
// console.log(COURSE)

// COURSE = "ABC"

// a = "aaa"
// let a = "bbb"
// a = "ccc"

// console.log(a)


//?EXERCISE 1: Primitive Data Types
// Convert a string into a number (e.g. "4" into 4)?
// let a = "100"
// let b = parseInt(a)
// console.log(b)


// Convert a number into a string (e.g. 15 into "15")?
// let a = 200
// let b = String(a)
// console.log(b)


// Make a string uppercased (e.g. "hello" into "HELLO")?
// let a = "Hello";
// let b = a.toUpperCase();
// console.log(b)


// Get the second character out of a string (e.g."hello" returns "e")?
// let a = "Hello"
// console.log(a[1])


// Use concatenation to combine two strings (e.g. join "Hello " and "World")?
// a = "Hello " + "World"
// console.log(a)

// console.log("Hello ,"World")

// let a ="Hello "
// let b = "World"
// console.log(a.concat(b))


// Get a number and square it (e.g. 4 squared is 16)?
// let a = 4
// console.log(Math.pow(a, 2));


// Get the square root of a number (e.g. square root of 25 is 5)?
// let a = 4
// console.log(Math.sqrt(a, 2));


// let a = 12
// if (a == a){
//     console.log("CORRECT")
// } else{
//     console.log("NOT TRUE")
// }

// let LoggedIn = false
// if (LoggedIn == true){
//     console.log("You can visit")
// }else {
//     console.log("Entry Denied")
// }

// let myNumber = 0
// if (myNumber > 0){
//     console.log("The number is positive")
// }else if (myNumber == 0){
//     console.log("The number is ZERO")
// }else {
//     console.log("The number is Negative")
// }


// //?EXERCISE 2
// //! (Q1) What number's bigger?
// //* Write an if statement that compares two numbers (call them numOne and numTwo).
// //* If numOne is bigger, it should log to the console "numOne (THE VALUE) is bigger than numTwo (THE VALUE)".
// //* If numTwo is bigger, it should log to the console "numOne (THE VALUE) is smaller than numTwo (THE VALUE)".
// //* If they are even, it should log to the console "numOne (THE VALUE) is equal to numTwo (THE VALUE)".

// let numOne = 1
// let numTwo = 2

// if (numOne > numTwo) {
//     console.log("numOne " + numOne + " is bigger than numTwo " + numTwo)
// } else if (numOne == numTwo) {
//     console.log("numOne " + numOne + " is equal to numTwo " + numTwo)
// } else {
//     console.log("numOne " + numOne + " is smaller than numTwo " + numTwo)
// }



// //! (Q2) Driving Age
// //* Store the user's name and age.
// //* If the age is less than 16, log "Sorry, you can't drive yet!"
// //* If the age is greater than or equal to 16, log "Drive into the sunset!"
// //~ Bonus: Get the name and age using prompt!
// //~ Bonus: If the user can't drive yet, tell them how many years they have before they can drive (e.g. "Sorry, you still have 4 years before you can drive")

// // let userName = "Lil\' John"
// // let userAge = 14

// // if(userAge < 16){
// //     console.log("Sorry, you can\'t drive yet\!")
// // }else{
// //     console.log("Drive into the sunset\!")
// // }

// // runAgain()

// // function runAgain() {
// //     let userName = prompt("Please enter your name")
// //     let userAge = parseInt((prompt("Please enter your age")))
// //     let minDriveAge = parseInt((16))
// //     let calcAge = minDriveAge - userAge

// //     //^ Checking boolean if promptName is null
// //     // console.log("userName is " + userName)
// //     // console.log(userName != null)
// //     // console.log(userName != "")

// //     //^ Checking boolean if promptAge is integer
// //     //console.log("Age is an integer: " + Number.isInteger(userAge))


// //     if (userName != "" && Number.isInteger(userAge) == true) {
// //         if (userAge < minDriveAge) {
// //             console.log("Sorry " + userName + ", you can\'t drive yet\!."
// //             + " You have to wait another " + calcAge + " years before you can legally drive!")
// //         } else {
// //             console.log( userName + ", drive into the sunset\!")
// //         }
// //     } else {
// //         runAgain()
// //     }
// // }


// let userName;
// checkName()
// checkAge() //function to check for age (not blank + integer)


// //function to check for name input (not blank)
// function checkName() {
//     userName = prompt("Please enter your name")
//     if (userName == "") { //check for not blank
//         console.log("You must input a name to proceed");
//         checkName(); //re-run function to check name
//     }

//     console.log("Hi " + userName + "! How old are you?")
// }

// function checkAge() {
//     let userAge = parseInt(prompt("Please enter your age"))
//     if (userAge == "") { //check for not blank
//         console.log(userName + " You must input your age to proceed")
//         checkAge() //re-run function to check age
//     }

//     if (!Number.isInteger(userAge)) { //boolean check for integer
//         console.log(userName + " Please enter a valid age")
//         checkAge() //re-run function to check age
//     }

//     let minDriveAge = 16 //define minimum legal driving age
//     console.log(userName +
//         (userAge >= minDriveAge
//             ? ", Drive into the sunset!"
//             : " You need to wait " + (minDriveAge - userAge) + " year(s) to be able to drive legally"))
// }





// let num = 3

// while (num >= 0) {
//     console.log(num)
//     //n = n + 1
//     num = num - 1
//     //or can be written num -= 1
// }


//make a loop that counts 3 to 8

// let num = 3

// while (num <=8) {
//     console.log(num)
//     num = num + 1
// }


// for loop
// count from 4 to 1
// starting point = 4
// ending point = 1
// step = -1

//for (let count = 4; count =1; count = count - 1)

// for (let count = 4; count >= 1; count = count - 1) {
//     console.log(count)
// }


// count -3 to -11
// for (let count = -3; count >= -11; count = count - 1) {
//     console.log(count)
// }


// count every third number from 1 to 17
// for (let count = 1; count <= 17; count = count + 3) {
//     console.log(count)
// }


//~ (count = count + 1) can also be written as (count += 1) can also be written as (count ++)

//! Exercises: Loops
//! Log every number from 0 to 10

// for (let count = 0; count <=10; count += 1) {
//     console.log(count)
// }


//! Log every number from 4 to -16

// for (let count = 4; count >= -16; count --) {
//     console.log(count)
// }




//! Log every fourth number from 8 to 41

// for (let count = 8; count <= 41; count += 4) {
//     console.log(count)
// }




//! The Classic Fizzbuzz Program
//! Loop from 0 to 100.
//! If the number is evenly divisible by 3, log "Fizz"
//! If the number is evenly divisible by 5, log "buzz"
//! If the number is evenly divisible by both 3 and 5, log "Fizzbuzz"

for (let count = 0; count <= 100; count++) {
    if(count % 3 == 0 && count % 5 == 0) console.log(count + " Fizzbuzz");
    else if(count % 3 == 0) console.log(count + " Fizz");
    else if(count % 5 == 0) console.log(count + " buzz");
}
