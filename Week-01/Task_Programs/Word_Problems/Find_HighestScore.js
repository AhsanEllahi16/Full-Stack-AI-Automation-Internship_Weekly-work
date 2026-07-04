let students=[
    {
        name:"Ahsan",
        score:80
    },
    {
        name:"Ali",
        score:92
    },
    {
        name:"Abdullah",
        score:75
    }
];
let highest_Score_name=function highest(){
    let high=students[0].score;
    let name=students[0].name;
    for(let i=0;i<students.length;i++){
        if(high<students[i].score){
            high=students[i].score;
            name=students[i].name;        
        }
    }
    return name;
}
console.log(`highest Score = ${highest_Score_name()}`);