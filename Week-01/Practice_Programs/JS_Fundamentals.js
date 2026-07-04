// =========================================
// 1. VARIABLES PRACTICE
// =========================================

const name = "Ahsan";
let age = 21;
const university = "COMSATS";
let cgpa = 3.2;
let internshipStatus = true;

console.log(name + " " + age + " " + university + " " + cgpa + " " + internshipStatus);


// =========================================
// 2. DATA TYPES & TYPEOF
// =========================================

let a = "ahsan";
let b = "10";
let bool = true;
let c = null;
let d;

console.log(a + " " + typeof(a));
console.log(b + " " + typeof(b));
console.log(bool + " " + typeof(bool));
console.log(c + " " + typeof(c));
console.log(d + " " + typeof(d));


// =========================================
// 3. SWAPPING VARIABLES
// =========================================

let x = 1;
let y = 20;

console.log("Before " + x + " " + y);

let z = x;
x = y;
y = z;

console.log("After " + x + " " + y);


// =========================================
// 4. TYPE COERCION
// =========================================

console.log("10" + 5);
console.log("10" - 5);
console.log(false + 10);
console.log(true + true);
console.log(null + 10);


// =========================================
// 5. BOOLEAN CONVERSION
// =========================================

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(100));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(null));
console.log(Boolean(undefined));


// =========================================
// 6. ARITHMETIC OPERATORS
// =========================================

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(x ** 2);
console.log(x ** 3);


// =========================================
// 7. COMPARISON OPERATORS
// =========================================

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);


// =========================================
// 8. TERNARY OPERATOR
// =========================================

let userAge = 18;

console.log(userAge >= 18 ? "eligible" : "not eligible");


// =========================================
// 9. LOGICAL OPERATORS
// =========================================

let marks = 20;
let attendance = 80;

if(marks >= 50 && attendance >= 75)
{
    console.log("pass");
}

let user = "admin";

if(user === "admin" || user === "moderator")
{
    console.log("login access");
}

console.log(!true);

console.log(x % 2 === 0 ? "even" : "odd");

console.log(userAge >= 19 ? "adult" : "minor");


// =========================================
// 10. IF ELSE PRACTICE
// =========================================

if(marks >= 90)
{
    console.log("A");
}
else if(marks >= 80)
{
    console.log("B");
}
else if(marks >= 70)
{
    console.log("C");
}
else
{
    console.log("fail");
}


// =========================================
// 11. POSITIVE NEGATIVE ZERO
// =========================================

if(y > 0)
{
    console.log("positive");
}
else if(y < 0)
{
    console.log("negative");
}
else
{
    console.log("zero");
}


// =========================================
// 12. SWITCH STATEMENT
// =========================================

switch(x)
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

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid");
}


// =========================================
// 13. SIMPLE CALCULATOR USING SWITCH
// =========================================

let cal = "+";

switch(cal)
{
    case "+":
        console.log(x + y);
        break;

    case "-":
        console.log(x - y);
        break;

    case "*":
        console.log(x * y);
        break;

    case "/":
        console.log(x / y);
        break;

    default:
        console.log("invalid operator");
}


// =========================================
// 14. WHILE LOOP
// =========================================

let i = 1;

while(i <= 10)
{
    console.log(i);
    i++;
}


// =========================================
// 15. REVERSE WHILE LOOP
// =========================================

let j = 10;

while(j >= 1)
{
    console.log(j);
    j--;
}


// =========================================
// 16. EVEN NUMBERS USING WHILE
// =========================================

let even = 1;

while(even <= 50)
{
    if(even % 2 === 0)
        console.log(even);

    even++;
}


// =========================================
// 17. TABLE OF 2
// =========================================

for(let k = 1; k <= 10; k++)
{
    console.log(k + " * 2 = " + k * 2);
}


// =========================================
// 18. SUM FROM 1 TO 100
// =========================================

let n = 0;

for(let m = 1; m <= 100; m++)
{
    n = n + m;
}

console.log(n);


// =========================================
// 19. FACTORIAL
// =========================================

let v = 5;

if(v === 0)
{
    console.log("fact=1");
}
else if(v < 0)
{
    console.log("factorial not exist");
}
else
{
    let fact = 1;

    for(let o = 1; o <= v; o++)
    {
        fact = fact * o;
    }

    console.log("fact=" + fact);
}


// =========================================
// 20. DO WHILE LOOP
// =========================================

let r = 1;

do
{
    console.log(r);
    r++;
}
while(r <= 10);


// =========================================
// 21. ODD NUMBERS USING DO WHILE
// =========================================

let f = 1;

do
{
    if(f % 2 !== 0)
        console.log(f);

    f++;
}
while(f <= 20);


// =========================================
// 22. BREAK
// =========================================

for(let s = 1; s <= 10; s++)
{
    if(s === 7)
        break;

    console.log(s);
}


// =========================================
// 23. CONTINUE
// =========================================

for(let t = 1; t <= 10; t++)
{
    if(t === 5)
        continue;

    console.log(t);
}


// =========================================
// 24. BREAK + CONTINUE
// =========================================

for(let q = 1; q <= 20; q++)
{
    if(q === 17)
        break;

    if(q % 3 === 0)
        continue;

    console.log(q);
}