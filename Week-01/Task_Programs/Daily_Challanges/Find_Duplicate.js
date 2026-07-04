let arr=[1,1,2,3,4,55,6,7,7];
let dup=0;
for(let i=0;i<=arr.length;i++){
    for(let j=i+1;j<=arr.length;j++){
        if(arr[i]===arr[j]){
            dup++;
            console.log("duplicate = "+arr[j]);
        }

    }
}
console.log(`total duplicates = ${dup}`);