let arr=[1,2,4,5];
let j=1;
for(let i=0;i<arr.length-1;i++){
    if(arr[i]!==j)
        console.log("missing = "+j);
    j++;
}