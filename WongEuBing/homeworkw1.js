// !The Age Calculator
// let currentYear = 2022
// let birthYear = 1986
// let age = currentYear - birthYear
// console.log(age)

//! The Lifetime Supply Calculator
// let currentAge = 36
// let maximumAge = 42
// let estimatedPerDay = 2
// let eatTotal = (maximumAge - currentAge) * estimatedPerDay
// console.log(eatTotal)
// console.log("You will need ", eatTotal, " to last you until the ripe old age of ", maximumAge)

// !The Geometrizer
// let radius = 12
// let circumference = (2 * 3.142 * Math.PI)
// console.log("The circumference is", circumference)
// let area = (3.142 * radius * radius)
// console.log("The area is", area)

// //! The Temperature Converter
// let tempCelsius = 32
// let convertToFarenheit = (tempCelsius * 1.8) + 32
// console.log(tempCelsius, "\u00B0C is", convertToFarenheit, "\u00B0F")
// let convertToCelsius = (convertToFarenheit - 32) * 0.56
// console.log(convertToFarenheit, "\u00B0F is", convertToCelsius, "\u00B0C")

//! The World Translator
// let language = prompt("Please input language")

// if (language == "english") {
//     console.log("Hello World");
// } else if (language == "french") {
//     console.log("Bonjor le monde");
// } else {
//     console.log("Hai Dunia")
// }

//! The Grade Assigner
// let testScore = prompt("Input Score")
// if (testScore >= 8) {
//     console.log("A");
// } else if (testScore == 7) {
//     console.log("B");
// } else if (testScore >= 4 && testScore < 7) {
//     console.log("C")
// } else if (testScore < 4 && testScore >= 2) {
//     console.log("D")
// } else if (testScore < 2) {
//     console.log("F")
// }

//! Air Conditioning
// let temp = 32
// let functional = true
// let desiredTemp = 24

// if (desiredTemp < temp && functional == true) {
//     console.log("Turn on the A/C please");
// } else if (desiredTemp < temp && functional == false) {
//     console.log("Fix the A/C now! It's hot!");
// } else if (desiredTemp >= temp && functional == false) {
//     console.log("Fix the A/C whenever you have the chance... It's cool")
// }

//! You and Your Government
// let age = prompt("Input Age")

// if (age >= 35) {
//     console.log("You can vote AND hold any place in government!");
// } else if (age >= 25 && age < 35) {
//     console.log("You can vote AND run for the Senate!");
// } else if (age >= 18 && age < 25) {
//     console.log("You can vote!")
// } else {
//     console.log("You can't vote yet")
// }

//! Golf
// let score = 1
// let par = true

// if (score == -2 && par == true) {
//     console.log("Eagle")
// } else if (score == 0 && par == false) {
//     console.log("Hole in One");
// } else if (score == -1 && par == true) {
//     console.log("Birdie");
// } else if (score == 0 && par == true) {
//     console.log("Par");
// } else if (score == 1 && par == true) {
//     console.log("Bogey");
// } else if (score == 2 && par == true) {
//     console.log("Double Bogey");
// } else if (score == 3 && par == true) {
//     console.log("Not Sure");
// }

//! Serge Says
// let message = prompt("type message")

// if (message.includes("?") == true) {
//     console.log("Sure")
// } else if (message.toUpperCase() == message && message != "") {
//     console.log("Whoah, chill out!")
// } else if (message == "") {
//     console.log("Fine. Be that way!")
// } else {
//     console.log("Whatever")
// }

//! The Pluralizer
// let word = prompt("Word", "Ability")

// //Normal Nouns
// let result = word + "s";

// //Get last letter of the word
// let lastChar = word.charAt(word.length - 1);
  
// //Get second to last letter of the word
// let secLastChar = word.charAt(word.length - 2);
  
// //Get all letters except the last letter
// let allButLastChar = word.substring(0, word.length - 1);

// //Get all letters except the second last and last letter
// let allButSecAndLastChar = word.substring(0, word.length - 1);

// //Nouns ending in s, x, z, o, ch, or sh
// if (
//   lastChar == "s" ||
//   lastChar == "x" ||
//   lastChar == "z" ||
//   word.substring(word.length - 2) == "ch" || 
//   word.substring(word.length - 2) == "sh" ||   
//   lastChar == "o"
// ) {
//   if (word == "ox") {
//     result = "oxen";
//   } else {
//     result = word + "es";
//   }
// }

// //Check whether the second char is vowel or not
// let isVowel = false;
// if (
//   secLastChar == "a" || 
//   secLastChar == "e" || 
//   secLastChar == "i" || 
//   secLastChar == "o" || 
//   secLastChar == "u"
// ) {
//   isVowel = true;
// } else {
//   isVowel = false;
// }

// //Nouns ending in y
// if (lastChar == "y") {
//   //Nouns ending in y, preceded by a vowel
//   if (isVowel) {
//     result = word + "s";
//   } else {
//     //Nouns ending in y, preceded by a consonant
//     result = allButLastChar + "ies";
//   }
// }

// //Nouns ending in f
// if (lastChar == "f") {
//   result = word.replace(last, "ves");
// }
  
// //Nouns ending in is
// if (word.substring(word.length - 2) == "is") {
//   if (word == "crisis") {
//     result = "crises";
//   } else {
//     result = allButSecAndLastChar + "es";
//   }
// }
// console.log(result);

//! The Rest
// let game = parseInt(prompt("How Many Games?", 1))
// let playerWinCount = 0;
// let botWinCount = 0;
// let draw = 0;
// for (let i = 0; i < game; i++) {
//   let player = parseInt(prompt("Rock - 0, Paper - 1, Scissors - 2", 0));
//   let bot = Math.floor(Math.random() * 3);
//   if(player == bot) draw++;

//   if(player == 0 && bot == 1) botWinCount++;
//   if(player == 0 && bot == 2) playerWinCount++;

//   if(player == 1 && bot == 0) playerWinCount++;
//   if(player == 1 && bot == 2) botWinCount++;

//   if(player == 2 && bot == 0) botWinCount++;
//   if(player == 2 && bot == 1) playerWinCount++; 
// }
// console.log(`Player Win: ${playerWinCount}, Bot Win: ${botWinCount}, Draw: ${draw}`)


//! The even/odd reporter
// for (let iLoopQ1 = 0; iLoopQ1 <= 20; iLoopQ1++) {
//     if(iLoopQ1 == 0) console.log(`${iLoopQ1} is neither even nor odd`)
//     else if(iLoopQ1 % 2 == 0) console.log(`${iLoopQ1} is even`)
//     else console.log(`${iLoopQ1} is odd`)
// }

//! Multiplication Tables
// for (let iLoopQ2 = 0; iLoopQ2 <= 12; iLoopQ2++) {
//  for (let jLoopQ2 = 0; jLoopQ2 <= 12; jLoopQ2++) {
//    let result = jLoopQ2 * iLoopQ2;
//    console.log(`${jLoopQ2} * ${iLoopQ2} = ${result}`);
//  }
// }


//! The Grade Assigner
// let grade;
// for (let iLoopQ3 = 60; iLoopQ3 <= 100; iLoopQ3++) {
//     if (iLoopQ3 >= 90) grade = 'A';
//     else if (iLoopQ3 >= 80) grade = 'B';
//     else if (iLoopQ3 >= 70) grade = 'C';
//     else if (iLoopQ3 >= 65) grade = 'D';
//     else grade = 'F';
//     console.log(`For ${iLoopQ3} you got a ${grade}`);
// }

//! Golf
// const MIN = 3;
// const MAX = 5;

// find diff
// let difference = MAX - MIN;

// for (let iLoopQ4 = 1; iLoopQ4 <= 8; iLoopQ4++) {
//     let par = 5
//     if (iLoopQ4 == 1) console.log("Hole in one")
//     else if ((iLoopQ4 - par) <= -2) console.log("Eagle")
//     else if ((iLoopQ4 - par) == -1) console.log("Birdie")
//     else if (iLoopQ4 == par) console.log("Par")
//     else if ((iLoopQ4 - par) == 1) console.log("Bogey")
//     else if ((iLoopQ4 - par) == 2) console.log("Double Bogey")
//     else console.log("Not sure")
// }

// for (let iLoopQ4 = 1; iLoopQ4 <= 8; index++) {
//     // generate random par number between 3 to 5
//     let rand = Math.random();
//     // multiply with difference 
//     rand = Math.floor( rand * difference);
//     // add with min value 
//     let par = rand + min;
//     for (let jLoopQ4 = 0; jLoopQ4 < array.length; iLoopQ4++) {

//         let strokes = Math.floor(Math.random() * 20);
//         if (strokes == 1) console.log("Hole in one")
//         else if ((strokes - par) <= -2) console.log("Eagle")
//         else if ((strokes - par) == -1) console.log("Birdie")
//         else if (strokes == par) console.log("Par")
//         else if ((strokes - par) == 1) console.log("Bogey")
//         else if ((strokes - par) == 2) console.log("Double Bogey")
//         else console.log("Not sure")
//     }
// }


//! 99 Bottles of Beer
// var bottles;
// for (counter = 99; counter >= 1; counter = counter - 1) 
// {
//     if (counter == 1) {
//         bottles = 'bottle';
//     } else {
//         bottles = 'bottles';
//     }
//     console.log(counter+" "+bottles+" of beer on the wall.");
//     if (counter < 99) {
//         console.log("");
//         console.log(counter+" "+bottles+" of beer on the wall.");
//     }
//     console.log(counter+" "+bottles+" of beer.");
//     console.log("Take one down.");
//     console.log("Pass it around.");
//     if (counter == 1) {
//         console.log("No bottles of beer on the wall.");
//     }
// }




