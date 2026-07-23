// Create 23 items
let items = [];

for(let i = 1; i <= 23; i++){

    items.push("Item " + i);

}

let list = document.getElementById("list");

let pageNumber = document.getElementById("pageNumber");

let prevBtn = document.getElementById("prevBtn");

let nextBtn = document.getElementById("nextBtn");

let currentPage = 1;

let itemsPerPage = 5;

function showPage(){

    list.innerHTML = "";

    let start = (currentPage - 1) * itemsPerPage;

    let end = start + itemsPerPage;

    let pageItems = items.slice(start,end);

    pageNumber.innerText = "Page " + currentPage;

    pageItems.forEach(function(item){

        let li = document.createElement("li");

        li.innerText = item;

        list.appendChild(li);

    });

}

showPage();

nextBtn.addEventListener("click",function(){

    let totalPages = Math.ceil(items.length / itemsPerPage);

    if(currentPage < totalPages){

        currentPage++;

        showPage();

    }

});

prevBtn.addEventListener("click",function(){

    if(currentPage > 1){

        currentPage--;

        showPage();

    }

});