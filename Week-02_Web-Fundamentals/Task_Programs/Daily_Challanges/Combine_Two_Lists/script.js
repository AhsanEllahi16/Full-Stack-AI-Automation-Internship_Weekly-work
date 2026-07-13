let users = [

    {id:1,name:"Ali"},
    {id:2,name:"Sara"},
    {id:3,name:"Ahmed"}

];

let orders = [

    {id:1,total:200},
    {id:2,total:500},
    {id:3,total:1000}

];

let usersList = document.getElementById("usersList");
let ordersList = document.getElementById("ordersList");
let resultList = document.getElementById("resultList");
let button = document.getElementById("combineBtn");

// Show Users
users.forEach(function(user){

    let li = document.createElement("li");

    li.innerText = user.id + " - " + user.name;

    usersList.appendChild(li);

});

// Show Orders
orders.forEach(function(order){

    let li = document.createElement("li");

    li.innerText = order.id + " - $" + order.total;

    ordersList.appendChild(li);

});

// Combine
button.addEventListener("click",function(){

    let result = [];

    for(let i=0;i<users.length;i++){

        for(let j=0;j<orders.length;j++){

            if(users[i].id === orders[j].id){

                result.push({

                    id:users[i].id,
                    name:users[i].name,
                    total:orders[j].total

                });

            }

        }

    }

    console.log(result);

    resultList.innerHTML = "";

    result.forEach(function(item){

        let li = document.createElement("li");

        li.innerText = item.name + " - $" + item.total;

        resultList.appendChild(li);

    });

});