// =========================================
// 1. SIMPLE FUNCTION
// =========================================

function greet()
{
    console.log("Welcome to JavaScript");
}

greet();


// =========================================
// 2. FUNCTION WITH PARAMETERS
// =========================================

function student(name, age, university)
{
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("University: " + university);
}

student("Ahsan", 22, "COMSATS");


// =========================================
// 3. TABLE USING FUNCTION
// =========================================

function table(num)
{
    for(let i = 1; i <= 10; i++)
    {
        console.log(num + " * " + i + " = " + num * i);
    }
}

table(2);


// =========================================
// 4. PRINT EVEN NUMBERS
// =========================================

function even(num)
{
    for(let i = 1; i <= num; i++)
    {
        if(i % 2 === 0)
            console.log(i);
    }
}

even(20);


// =========================================
// 5. SQUARE FUNCTION
// =========================================

function square(num)
{
    console.log(num ** 2);
}

square(5);


// =========================================
// 6. AREA OF RECTANGLE
// =========================================

function area(length, width)
{
    console.log(length * width);
}

area(10, 5);


// =========================================
// 7. STUDENT DETAILS
// =========================================

function studentDetails(name, age, university, cgpa)
{
    console.log(name + " " + age + " " + university + " " + cgpa);
}

studentDetails("Ahsan", 22, "COMSATS", 3.5);


// =========================================
// 8. LARGEST OF TWO NUMBERS
// =========================================

function largestPrint(a, b)
{
    if(a > b)
        console.log(a);
    else
        console.log(b);
}

largestPrint(10, 5);


// =========================================
// 9. FUNCTION WITH RETURN
// =========================================

function addition(a, b)
{
    return a + b;
}

let sum = addition(5, 10);
console.log(sum);


// =========================================
// 10. RETURN CUBE
// =========================================

function cube(num)
{
    return num ** 3;
}

let cubeResult = cube(3);
console.log(cubeResult);


// =========================================
// 11. CHECK EVEN USING RETURN
// =========================================

function isEven(num)
{
    if(num % 2 === 0)
        return true;
    else
        return false;
}

let evenResult = isEven(4);
console.log(evenResult);


// =========================================
// 12. RETURN LARGEST
// =========================================

function largest(a, b)
{
    if(a > b)
        return a;
    else
        return b;
}

let largestResult = largest(1, 2);
console.log(largestResult);


// =========================================
// 13. FUNCTION EXPRESSION
// =========================================

let greetExpression = function()
{
    console.log("Welcome");
};

greetExpression();


// =========================================
// 14. FUNCTION EXPRESSION SQUARE
// =========================================

let double = function(a)
{
    return a * 2;
};

let doubleResult = double(5);
console.log(doubleResult);


// =========================================
// 15. FUNCTION EXPRESSION SUM
// =========================================

let sumThree = function(a, b, c)
{
    return a + b + c;
};

let total = sumThree(9, 2, 4);
console.log(total);


// =========================================
// 16. FUNCTION EXPRESSION LARGEST
// =========================================

let largestExpression = function(a, b)
{
    if(a > b)
        return a;
    else
        return b;
};

let max = largestExpression(9, 0);
console.log(max);


// =========================================
// 17. ARROW FUNCTION
// =========================================

let greetArrow = () =>
{
    console.log("Welcome to JavaScript");
};

greetArrow();


// =========================================
// 18. ARROW FUNCTION SQUARE
// =========================================

let squareArrow = (num) => num * num;

console.log(squareArrow(5));


// =========================================
// 19. ARROW FUNCTION MULTIPLY
// =========================================

let multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(5, 6));


// =========================================
// 20. ARROW FUNCTION EVEN CHECK
// =========================================

let evenArrow = (a) =>
{
    if(a % 2 === 0)
        return true;
    else
        return false;
};

console.log(evenArrow(4));


// =========================================
// 21. FUNCTION COMPOSITION
// square(add())
// =========================================

function add(a, b)
{
    return a + b;
}

function square2(x)
{
    return x ** 2;
}

let answer1 = square2(add(8, 6));

console.log(answer1);


// =========================================
// 22. FUNCTION COMPOSITION
// cube(multiply())
// =========================================

function multiply(a, b)
{
    return a * b;
}

function cube2(x)
{
    return x ** 3;
}

let answer2 = cube2(multiply(7, 8));

console.log(answer2);


// =========================================
// 23. FUNCTION COMPOSITION
// minusTen(double())
// =========================================

function double2(x)
{
    return x * 2;
}

function minusTen(y)
{
    return y - 10;
}

let answer3 = minusTen(double2(5));

console.log(answer3);