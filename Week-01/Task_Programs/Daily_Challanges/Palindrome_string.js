let originalStr="Ahsan";
let str=originalStr.split("");
let rev=[];
for(let i=str.length-1;i>=0;i--){
    rev.push(str[i]);
}
rev=rev.join("");
if(originalStr===rev){
    console.log("string is palindrom");
}
else{
    console.log("Not a palindrom");
}