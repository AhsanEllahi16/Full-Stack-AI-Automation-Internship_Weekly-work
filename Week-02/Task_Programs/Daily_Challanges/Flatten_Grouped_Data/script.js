let data = [

    {

        category: "Fruits",

        items: ["Apple","Mango"]

    },

    {

        category: "Vegetables",

        items: ["Potato","Tomato"]

    }

];

let before = document.getElementById("before");

let after = document.getElementById("after");

let button = document.getElementById("flattenBtn");

// Show Original Data

function showOriginal(){

    before.innerHTML = "";

    data.forEach(function(group){

        let li = document.createElement("li");

        li.innerText = group.category + " : " + group.items.join(", ");

        before.appendChild(li);

    });

}

showOriginal();

button.addEventListener("click",function(){

    let result = [];

    // Flatten Data

    for(let i=0;i<data.length;i++){

        for(let j=0;j<data[i].items.length;j++){

            result.push({

                category:data[i].category,

                item:data[i].items[j]

            });

        }

    }

    console.log(result);

    after.innerHTML = "";

    result.forEach(function(obj){

        let li = document.createElement("li");

        li.innerText = obj.category + " - " + obj.item;

        after.appendChild(li);

    });

});