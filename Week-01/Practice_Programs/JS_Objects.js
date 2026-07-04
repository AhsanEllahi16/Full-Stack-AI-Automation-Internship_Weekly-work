// =========================================
// 1. CREATING AN OBJECT
// =========================================

let student = {
    name: "Ahsan",
    age: 22,
    university: "COMSATS",
    cgpa: 3.5
};

console.log(student.name);
console.log(student.age);
console.log(student.university);
console.log(student.cgpa);


// =========================================
// 2. ACCESSING OBJECT USING BRACKET NOTATION
// =========================================

let phone = {
    brand: "Samsung",
    model: "S24",
    price: 250000
};

console.log(phone["brand"]);
console.log(phone["model"]);
console.log(phone["price"]);


// =========================================
// 3. ANOTHER OBJECT
// =========================================

let country = {
    country: "Pakistan",
    capital: "Islamabad",
    population: 240
};

console.log(country.capital);
console.log(country.population);


// =========================================
// 4. UPDATING OBJECT PROPERTY
// =========================================

let student2 = {
    name: "Ali",
    age: 20
};

student2.age = 21;

console.log(student2);


// =========================================
// 5. ADDING NEW PROPERTIES
// =========================================

let car = {
    brand: "Toyota"
};

car.model = "Corolla";
car.year = 2024;

console.log(car);


// =========================================
// 6. MODIFYING OBJECT PROPERTY
// =========================================

let mobile = {
    company: "Samsung",
    price: 100000
};

mobile.price = 120000;

console.log(mobile);


// =========================================
// 7. NESTED OBJECT
// =========================================

let person = {
    name: "Ali",
    age: 20,

    address: {
        city: "Multan",
        country: "Pakistan"
    }
};

console.log(person.address.city);
console.log(person.address.country);


// =========================================
// 8. NESTED OBJECT (CAR)
// =========================================

let Car = {
    brand: "Toyota",

    engine: {
        type: "Petrol",
        cc: 1800
    }
};

console.log(Car.engine.type);
console.log(Car.engine.cc);


// =========================================
// 9. NESTED OBJECT (MOBILE)
// =========================================

let Mobile = {
    company: "Samsung",

    specification: {
        ram: "8GB",
        storage: "256GB"
    }
};

console.log(Mobile.specification.ram);
console.log(Mobile.specification.storage);


// =========================================
// 10. FOR...IN LOOP
// =========================================

let CAR = {
    brand: "Toyota",
    model: "Corolla",
    year: 2024
};

// Print keys
for(let key in CAR)
{
    console.log(key);
}

// Print values
for(let key in CAR)
{
    console.log(CAR[key]);
}

// Print both
for(let key in CAR)
{
    console.log(key, CAR[key]);
}


// =========================================
// 11. JSON.STRINGIFY()
// =========================================

let student3 = {
    name: "Ali",
    age: 20
};

let json = JSON.stringify(student3);

console.log(json);
console.log(typeof json);


// =========================================
// 12. JSON.PARSE()
// =========================================

let car2 = {
    brand: "Toyota",
    year: 2024
};

let c = JSON.stringify(car2);

console.log(c);

let data = '{"city":"Lahore","country":"Pakistan"}';

let d = JSON.parse(data);

console.log(d);
console.log(typeof d);