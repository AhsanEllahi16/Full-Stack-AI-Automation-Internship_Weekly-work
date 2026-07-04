const name="ahsan";
let age=21;
const university="consats";
let cgpa=3.2;
let InternshipStatus=true;
console.log(name+ " "+age+" "+university+" "+cgpa+" "+InternshipStatus);

let a="ahsan";
let b="10";
let bool=true;
let c=null;
let d;
console.log(a+" "+typeof(a));
console.log(b+" "+typeof(b));
console.log(bool+" "+typeof(bool));
console.log(c+" "+typeof(c));
console.log(d+" "+typeof(d));

let x=1;
let y=20;
console.log("before"+ " "+x+" "+y);
let z=x;
x=y;
y=z;
console.log("after"+ " "+x+" "+y);

console.log("10"+5);//+operator check first value is string make the next one string and join them 
console.log("10"-5);//-op check first value is string and second int so make string to int sub them and ans is 5
console.log(false+10);//the first one is 0 so 0+10=10
consoile.log(true+true);//both are bollean so convert to int add them ans 2
console.log(null+10);//null is 0 so 10

console,log(boolean(0));
console,log(boolean(1));
console,log(boolean(100));
console,log(boolean(""));
console,log(boolean("hello"));
console,log(boolean({}));
console,log(boolean([]));
console,log(boolean(null));
console,log(boolean(undefined));

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

console.log(x**2);
console.log(x**3);

console.log(x==y);
console.log(x===y);
console.log(x!=y);
console.log(x!==y);
console.log(x<y);
console.log(x>y);
console.log(x<=y);
console.log(x>=y);

let age=18;
console.log(age>=18? "eligible":"not eligible");

let marks=20;
let attendance=80;
if(marks>=50&&attendance>=75){
    console.log("pass");
}

let user="admin";
if(user==="admin"||user==="moderator")
    console.log("login access");

console.log(!(true));
console.log(x%2===0?"even":"odd");
console.log(age>=19?"adult":"minor");

if(marks>=90){
    console.log("A");
}else if(marks>=80){
    console.log("B");
}else if(marks>=70){
    console.log("C");
}else{
    console.log("fail");
}

if(y>=0){
    console.log("positive");
}else if(y<=0){
    console.log("negative");
}else{
    console.log("zero");
}

switch(x){
    case1:
    console.log("monday");
    break;
    case2:
    console.log("tuesday");
    break;
    case3:
    console.log("wednesday");
    break;
    case4:
    console.log("thursday");
    break;
    case5:
    console.log("friday");
    break;
    case6:
    console.log("saturday");
    break;
    case7:
    console.log("sunday");
    braek;
    default:
    console.log("invalid");
}

let cal="+";
switch(cal){
    case"+":
    console.log(x+y);
    break;
    case"-":
    comsole.log(x-y);
    break;
    case"*":
    console.log(x*y);
    break;
    case"/":
    console.log(x/y);
    break;
    default:
    console.log("invalid operator");
}

let i=1;
while(i<=10){
    console.log(i);
    i++;
}

let j=10;
while(j>=1){
    console.log(j);
    j++;
}

while(i<=50){
    if(i%2===0)
        console.log(i);
    i++;
}

for(let k=1;k<=10;k++){
    console.log(k+" * "+2+" = "+K*2);
}

for(let l=1;i<=10;l++){
    g=prompt("enter a number = ");
    console.log(l+" * "+g+" = "+l*g);
}
let n=0;
for(let m=0;m<=100;m++){
    n=n+m;    
    console.log(n);  
}

let v=prompt("enter a number = ");
if(v===0)
    console.log("fact=0");
else if(v<0)
    console.log("fact= not exist");
else{
    let  fact=1;
    for(let o=1;o<=v;o++){
        fact=fact*o;
    }
    console.log("fact="+fact);
}

let r=1;
do{
    console.log(r);
    r++;
}
while(r<=10);


let f=1;
do{
    if(f%2!==0)
        console.log(f);
    f++;
}
while(f<=20);

for(let s=1;i<=10;i++){
    if(s===7)
        break;
    console.log(s);
}

for(let t=1;t<=10;t++){
    if(t===5)
        continue;
    console.log(t);
}

for(let q=1;q<=20;q++){
    if(q===17)
        break;
    else if(q%3===0)
        continue;
    console.log(q);
}



