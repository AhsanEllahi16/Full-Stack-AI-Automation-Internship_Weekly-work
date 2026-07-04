let candies=23;
let students=5;
let results=function SplitCandies(){
    let i=candies;
    let each=0;
    while(i>=students){
        each++;
        i=i-students;
    }
    return [i,each];

}
let [leftover,get]=results();
console.log(`LeftOver = ${leftover}
Students Get = ${get}`);