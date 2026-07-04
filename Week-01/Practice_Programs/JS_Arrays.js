// =========================================
// 1. ARRAY CREATION
// =========================================

let cities = ["Lahore", "Multan", "Sialkot", "Okara", "Pattoki"];

console.log(cities);


// =========================================
// 2. ACCESSING ARRAY ELEMENTS
// =========================================

let num = [1,2,3,4,5];

console.log(num[0]);
console.log(num[4]);


// =========================================
// 3. MODIFYING ARRAY ELEMENT
// =========================================

let names = ["Ahsan","Ali","Ahmed"];

names[1] = "Usman";

console.log(names);


// =========================================
// 4. EMPTY ARRAY
// =========================================

let array = [];

array[0]=10;
array[1]=20;
array[2]=30;
array[3]=40;
array[4]=50;

console.log(array);


// =========================================
// 5. ARRAY LENGTH
// =========================================

let arr = [1,2,3,4,5,6,7];

console.log(arr.length);


// =========================================
// 6. PRINT ARRAY USING FOR LOOP
// =========================================

for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}


// =========================================
// 7. SUM OF ARRAY
// =========================================

let a = [5,10,15,20];

let sum = 0;

for(let i=0;i<a.length;i++)
{
    sum = sum + a[i];
}

console.log(sum);


// =========================================
// 8. FOREACH
// =========================================

let b = [2,4,6,8,10];

b.forEach((n)=>{
    console.log(n);
});


// =========================================
// 9. FOREACH WITH INDEX
// =========================================

let studentNames = ["Ahsan","Ali","Ahmed"];

studentNames.forEach((name,index)=>{
    console.log(name,index);
});


// =========================================
// 10. MAP
// =========================================

let c = [1,2,3,4,5];

let double = c.map((num)=>num*2);

console.log(double);


// =========================================
// 11. MAP SQUARE
// =========================================

let d = [2,4,6];

let square = d.map((num)=>num**2);

console.log(square);


// =========================================
// 12. MAP STRING
// =========================================

let students = ["Ahsan","Ali","Ahmed"];

let upper = students.map((n)=>n.toUpperCase());

console.log(upper);


// =========================================
// 13. MAP ADDITION
// =========================================

let e = [5,10,15];

let add = e.map((num)=>num+10);

console.log(add);


// =========================================
// 14. FILTER ODD
// =========================================

let w = [1,2,3,4,5,6,7,8];

let odd = w.filter((num)=>num%2!==0);

console.log(odd);


// =========================================
// 15. FILTER GREATER THAN 50
// =========================================

let r = [20,60,80,10,90];

let greater = r.filter((num)=>num>50);

console.log(greater);


// =========================================
// 16. FILTER STRING LENGTH
// =========================================

let n = ["Ali","Ahsan","Ahmed","Huzaifa"];

let chars = n.filter((c)=>c.length>3);

console.log(chars);


// =========================================
// 17. FILTER POSITIVE
// =========================================

let v = [-5,10,-2,20,30];

let positive = v.filter((num)=>num>0);

console.log(positive);


// =========================================
// 18. REDUCE SUM
// =========================================

let v2 = [5,10,15,20];

let total = v2.reduce((sum,num)=>{
    return sum+num;
},0);

console.log(total);


// =========================================
// 19. REDUCE PRODUCT
// =========================================

let x = [2,3,4];

let product = x.reduce((pro,num)=>{
    return pro*num;
},1);

console.log(product);


// =========================================
// 20. REDUCE LARGEST
// =========================================

let y = [10,50,20,90,30];

let large = y.reduce((largest,num)=>{
    if(num>largest)
        return num;
    else
        return largest;
},y[0]);

console.log(large);


// =========================================
// 21. REDUCE STRING LENGTH
// =========================================

let u = ["Ali","Ahmed","Ahsan"];

let longest = u.reduce((len,name)=>{
    return Math.max(len,name.length);
},0);

console.log(longest);


// =========================================
// 22. FIND
// =========================================

let w2 = [5,10,25,30,40];

console.log(w2.find((x)=>x>20));


// =========================================
// 23. FIND ODD
// =========================================

let f = [2,4,6,7,8,9];

console.log(f.find((x)=>x%2!==0));


// =========================================
// 24. FIND STRING
// =========================================

let u2 = ["Ali","Ahmed","Huzaifa","Usman"];

console.log(u2.find((x)=>x.length>5));


// =========================================
// 25. FIND NEGATIVE
// =========================================

let y2 = [10,20,-5,-10];

console.log(y2.find((x)=>x<0));


// =========================================
// 26. SORT ASCENDING
// =========================================

let d1 = [40,10,90,20];

d1.sort((a,b)=>a-b);

console.log(d1);


// =========================================
// 27. SORT DESCENDING
// =========================================

let d2 = [40,10,90,20];

d2.sort((a,b)=>b-a);

console.log(d2);


// =========================================
// 28. SORT STRINGS
// =========================================

let fruit = ["Mango","Apple","Banana"];

fruit.sort();

console.log(fruit);


// =========================================
// 29. INCLUDES
// =========================================

let arr1 = [1,2,3,4,5];

console.log(arr1.includes(3));

let arr2 = [10,20,30];

console.log(arr2.includes(50));

let fruits = ["Apple","Mango","Banana"];

console.log(fruits.includes("Mango"));

console.log(fruits.includes("mango"));


// =========================================
// 30. PUSH
// =========================================

let pushArray = [1,2,3];

pushArray.push(4);

console.log(pushArray);

let pushString = ["A","B"];

pushString.push("C","D");

console.log(pushString);


// =========================================
// 31. POP
// =========================================

let popArray = [10,20,30,40];

popArray.pop();

console.log(popArray);

let popArray2 = [5,10,15];

let s = popArray2.pop();

console.log(s);

console.log(popArray2);


// =========================================
// 32. UNSHIFT
// =========================================

let unshiftArray = [20,30];

unshiftArray.unshift(10);

console.log(unshiftArray);

let unshiftString = ["B","C"];

unshiftString.unshift("A");

console.log(unshiftString);


// =========================================
// 33. SHIFT
// =========================================

let shiftArray = [10,20,30];

shiftArray.shift();

console.log(shiftArray);

let shiftArray2 = [100,200,300];

let first = shiftArray2.shift();

console.log(first);

console.log(shiftArray2);