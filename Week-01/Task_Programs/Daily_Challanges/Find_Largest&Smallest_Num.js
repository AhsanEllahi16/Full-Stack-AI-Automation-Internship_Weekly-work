let result=(...num)=>{
    let largest=num[0];
    let smallest=num[0];
    for(let i=num.length-1;i>=0;i--){
if(largest<num[i])
    largest=num[i];
if(smallest>num[i])
    smallest=num[i];
    }
return [largest,smallest];
};
let [large,small]=result(20,30,40,50,2,3,1);
console.log("largest = "+large+"   smallest = "+small);