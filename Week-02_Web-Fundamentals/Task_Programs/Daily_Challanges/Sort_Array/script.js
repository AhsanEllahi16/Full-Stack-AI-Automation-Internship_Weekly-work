let items = [
    { name: "Item A", value: 50 },
    { name: "Item B", value: 20 },
    { name: "Item C", value: 80 }
];

let beforeList = document.getElementById("beforeList");
let afterList = document.getElementById("afterList");
let sortBtn = document.getElementById("sortBtn");

// Show Original Array
function showBefore() {

    beforeList.innerHTML = "";

    items.forEach(function(item){

        let li = document.createElement("li");

        li.innerText = item.name + " (" + item.value + ")";

        beforeList.appendChild(li);

    });

}

// Show Sorted Array
function showAfter() {

    afterList.innerHTML = "";

    items.forEach(function(item){

        let li = document.createElement("li");

        li.innerText = item.name + " (" + item.value + ")";

        afterList.appendChild(li);

    });

}

// Display original list when page loads
showBefore();

sortBtn.addEventListener("click",function(){

    // Bubble Sort
    for(let i=0;i<items.length-1;i++){

        for(let j=0;j<items.length-1-i;j++){

            if(items[j].value > items[j+1].value){

                let temp = items[j];
                items[j] = items[j+1];
                items[j+1] = temp;

            }

        }

    }

    console.log("Sorted Array:");
    console.log(items);

    showAfter();

});