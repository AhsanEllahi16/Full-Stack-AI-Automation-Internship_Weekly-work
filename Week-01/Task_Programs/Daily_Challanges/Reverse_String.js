let str = "Ahsan";
let strSplit=str.split("");
let reverseStr=[];
for(let i=strSplit.length-1;i>=0;i--){
    reverseStr.push(strSplit[i]);
}
reverseStr=reverseStr.join("");
console.log(`original = ${str}
reverse = ${reverseStr}`);