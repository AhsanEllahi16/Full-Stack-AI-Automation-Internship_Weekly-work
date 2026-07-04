// =========================================
// 1. VARIABLES PRACTICE (var, let, const)
// =========================================

// var - can be redeclared and updated
var name = "Ahsan";
console.log(name);

name = "Ali";
console.log(name);

var name = "Ahmed";
console.log(name);

// let - can be updated but cannot be redeclared
let marks = 90;
console.log(marks);

marks = 95;
console.log(marks);

// const - cannot be updated or redeclared
const user = "Ahsan";
console.log(user);


// =========================================
// 2. VARIABLES PRACTICE EXAMPLE
// =========================================

let name1 = "Ahsan";
let age = 20;
const university = "COMSATS";
let cgpa = 2.8;
let isIntern = "yes";

console.log(
    "My name is " + name1 +
    " and my age is " + age +
    " and I am studying in " + university +
    " and my CGPA is " + cgpa +
    " and I am an intern: " + isIntern
);


// =========================================
// 3. DATA TYPES & typeof OPERATOR
// =========================================

let a = 10;
console.log(typeof a);      // number

let c = 10.5;
console.log(typeof c);      // number

let b = "ahsan";
console.log(typeof b);      // string

let d = true;
console.log(typeof d);      // boolean

let e = null;
console.log(typeof e);      // object (JS bug)

let f;
console.log(typeof f);      // undefined


// =========================================
// 4. TYPE COERCION & TYPE CONVERSION
// =========================================

console.log("5" + 2);           // "52"
console.log(true - 0);          // 1
console.log("ahsan" + 1);       // ahsan1
console.log(null + 5);          // 5

let frog = 5;
console.log(typeof String(frog));   // string

console.log("5" + 5 + 5);       // 555
console.log(5 + 5 + "5");       // 105

console.log("10" * "2");        // 20
console.log("10" / "2");        // 5

console.log(Boolean(0));        // false
console.log(Boolean(100));      // true
console.log(Boolean(""));       // false


// =========================================
// 5. ARITHMETIC OPERATORS
// =========================================

let x = 2;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);
console.log(x % y);

console.log(x++);   // post increment
console.log(x);

console.log(++x);   // pre increment

console.log(y--);   // post decrement
console.log(y);

console.log(--y);   // pre decrement


// =========================================
// 6. COMPARISON OPERATORS
// =========================================

console.log(10 == "10");
console.log(10 === "10");

console.log(5 != "5");
console.log(5 !== "5");

console.log(20 > 10);
console.log(20 < 10);

console.log(false == 0);

console.log(null == undefined);
console.log(null === undefined);


// =========================================
// 7. LOGICAL OPERATORS
// =========================================

console.log(true && true);
console.log(true && false);

console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);

console.log(10 > 5 && 20 > 10);

console.log(10 > 20 || 5 < 10);

console.log(!(10 > 5));

console.log(!!"Ahsan");

console.log(!!"");

console.log(!!0);


// =========================================
// 8. TERNARY OPERATOR
// =========================================

let height = 20;

console.log(height >= 18 ? "Hey Adult" : "Hey Kid");


// =========================================
// 9. CONDITIONAL STATEMENTS (if-else)
// =========================================

// renamed from marks to studentMarks
let studentMarks = 75;

if (studentMarks >= 90)
{
    console.log("A");
}
else if (studentMarks >= 80)
{
    console.log("B");
}
else if (studentMarks >= 70)
{
    console.log("C");
}
else
{
    console.log("Fail");
}


// =========================================
// 10. SWITCH STATEMENT
// =========================================

let day = 1;

switch(day)
{
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid");
}


// =========================================
// 11. SWITCH WITH GRADES
// =========================================

let grade = "B";

switch(grade)
{
    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("Average");
        break;

    default:
        console.log("Fail");
}


// =========================================
// 12. LOOPS - WHILE LOOP
// =========================================

let i = 1;

while(i <= 3)
{
    console.log(i);
    i++;
}