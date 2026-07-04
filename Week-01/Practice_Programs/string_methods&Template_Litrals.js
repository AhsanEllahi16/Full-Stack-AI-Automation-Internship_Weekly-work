// =========================================
// 1. STRING METHODS
// toUpperCase(), toLowerCase(), trim()
// =========================================

let name = "ahsan";
console.log(name.toUpperCase());

let city = "LAHORE";
console.log(city.toLowerCase());

let text1 = "    JavaScript    ";
console.log(text1.trim());

let university = "COMSATS";
console.log(university.toLowerCase());


// =========================================
// 2. STRING SPLIT METHOD
// split() with different separators
// =========================================

let text2 = "Ahsan,Ali,Ahmed";
console.log(text2.split(","));

let text3 = "Java Script";
console.log(text3.split(" "));

let text4 = "HELLO";
console.log(text4.split(""));

let text5 = "1-2-3-4";
console.log(text5.split("-"));


// =========================================
// 3. STRING REPLACE METHOD
// replace(oldValue, newValue)
// =========================================

let text6 = "I study C++";
console.log(text6.replace("C++", "JavaScript"));

let text7 = "Hello Ali";
console.log(text7.replace("Ali", "Ahmed"));

let text8 = "apple";
console.log(text8.replace("a", "A"));

let text9 = "Pakistan";
console.log(text9.replace("Pakistan", "Canada"));


// =========================================
// 4. TEMPLATE LITERALS
// String interpolation using ${}
// =========================================

let studentName = "Ali";
let age = 20;

console.log(`My name is ${studentName} and age is ${age}`);

let a = 10;
let b = 15;

console.log(`Sum = ${a + b}`);

let num = 7;
console.log(`7 * 3 = ${num * 3}`);

let uniName = "COMSATS";
console.log(`Welcome to ${uniName}`);