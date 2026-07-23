//Own_Map
function myMap(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}

// Example
let numbers = [1, 2, 3, 4];

let output = myMap(numbers, function (value) {
    return value * 2;
});

console.log(output);

//Debounce
function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

//Throttle
function throttle(func, delay) {
    let lastTime = 0;

    return function () {
        let now = Date.now();

        if (now - lastTime >= delay) {
            lastTime = now;
            func();
        }
    };
}

//fetchWithRetry(url, 3)
async function fetchWithRetry(url, retries) {

    while (retries > 0) {

        try {

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Request Failed");
            }

            return await response.json();

        } catch (error) {

            retries--;

            console.log(`Retry Left: ${retries}`);

            if (retries === 0) {
                throw error;
            }
        }
    }
}

// Example
fetchWithRetry("https://jsonplaceholder.typicode.com/users", 3)
    .then(data => console.log(data))
    .catch(error => console.log(error.message));

//Group Items by a Shared Value Problem
function groupBy(array, key) {

    let result = {};

    for (let item of array) {

        if (!result[item[key]]) {
            result[item[key]] = [];
        }

        result[item[key]].push(item);
    }

    return result;
}

// Example

let employees = [

    { name: "Ali", dept: "Sales" },

    { name: "Sara", dept: "Tech" },

    { name: "Ahmed", dept: "Sales" },

    { name: "Ahsan", dept: "Tech" }

];

console.log(groupBy(employees, "dept"));

//Deep Copy an Object Problem
function deepCopy(obj) {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

// Example

let student = {
    name: "Ahsan",
    age: 21,
    address: {
        city: "Okara"
    }
};

let newStudent = deepCopy(student);

newStudent.address.city = "Lahore";

console.log(student.address.city);

console.log(newStudent.address.city);

//Build Your Own Promise.all() Problem
function myPromiseAll(promises) {

    return new Promise((resolve, reject) => {

        let results = [];
        let completed = 0;

        for (let i = 0; i < promises.length; i++) {

            promises[i]
                .then(data => {

                    results[i] = data;

                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }

                })
                .catch(error => {
                    reject(error);
                });

        }

    });

}

// Example

let p1 = Promise.resolve("HTML");
let p2 = Promise.resolve("CSS");
let p3 = Promise.resolve("JavaScript");

myPromiseAll([p1, p2, p3])
    .then(result => console.log(result))
    .catch(error => console.log(error));
