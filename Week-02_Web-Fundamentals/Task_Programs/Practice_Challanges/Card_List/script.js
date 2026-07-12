let input = document.getElementById("task");

let addBtn = document.getElementById("addBtn");

let list = document.getElementById("list");

addBtn.addEventListener("click", function(){

    if(input.value === ""){
        return;
    }

    let li = document.createElement("li");

    li.innerText = input.value;

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function(){

        li.remove();

    });

    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";

});