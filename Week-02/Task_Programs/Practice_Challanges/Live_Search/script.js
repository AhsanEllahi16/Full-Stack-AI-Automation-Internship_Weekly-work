let search = document.getElementById("search");

let items = document.querySelectorAll("#list li");

search.addEventListener("input", function(){

    let value = search.value.toLowerCase();

    items.forEach(function(item){

        let text = item.innerText.toLowerCase();

        if(text.includes(value)){

            item.style.display = "list-item";

        }

        else{

            item.style.display = "none";

        }

    });

});