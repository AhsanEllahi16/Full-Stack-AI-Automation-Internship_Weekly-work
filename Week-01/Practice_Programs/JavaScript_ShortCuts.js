// =========================================
// 13. ARRAY DESTRUCTURING
// =========================================

let arr = [5, 10, 15];

let [num1, num2] = arr;
console.log(num1, num2);


// =========================================
// 14. ARRAY DESTRUCTURING WITH STRINGS
// =========================================

let names = ["Ali", "Ahmed", "Usman"];

let [first, second, third] = names;
console.log(first, second, third);


// =========================================
// 15. OBJECT DESTRUCTURING WITH RENAMING
// =========================================

let car = {
    brand: "Toyota",
    year: 2024
};

let { brand: carBrand, year: carYear } = car;
console.log(carBrand, carYear);


// =========================================
// 16. ARRAY DESTRUCTURING WITH SKIPPING
// =========================================

let numbers = [10, 20, 30, 40];

let [y, , x] = numbers;
console.log(y, x);


// =========================================
// 17. OBJECT DESTRUCTURING
// =========================================

let student = {
    name: "Ahsan",
    age: 22,
    cgpa: 3.5
};

let { name, cgpa } = student;
console.log(name, cgpa);


// =========================================
// 18. ARRAY DESTRUCTURING WITH SKIP VALUES
// =========================================

let colors = ["red", "green", "blue"];

let [firstColor, , thirdColor] = colors;
console.log(firstColor, thirdColor);


// =========================================
// 19. SPREAD OPERATOR WITH ARRAYS
// =========================================

let arr1 = [10, 20];
let arr2 = [30, 40];

console.log(...arr1, ...arr2);


// =========================================
// 20. SPREAD OPERATOR WITH STRING
// =========================================

let word = "HELLO";

console.log(...word);


// =========================================
// 21. OBJECT PRACTICE
// =========================================

let person = {
    name: "Ahsan",
    age: 22
};

// Objects cannot be spread directly in console.log()
// Use this instead:
console.log(person);

// OR
console.log({ ...person });


// =========================================
// 22. REST PARAMETER FUNCTION - SUM
// =========================================

function add(...num)
{
    let sum = 0;

    for(let i = 0; i < num.length; i++)
    {
        sum = sum + num[i];
    }

    console.log(sum);
}

add(10, 20, 30, 40);


// =========================================
// 23. REST PARAMETER FUNCTION - LARGEST
// =========================================

function largest(...num)
{
    let large = num[0];

    for(let i = 0; i < num.length; i++)
    {
        if(large < num[i])
        {
            large = num[i];
        }
    }

    console.log(large);
}

largest(10, 50, 20, 100, 40);