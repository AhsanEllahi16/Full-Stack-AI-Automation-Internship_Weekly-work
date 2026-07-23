let search = document.getElementById("search");

let result = document.getElementById("result");

let timer;

search.addEventListener("input", function(){

    clearTimeout(timer);

    timer = setTimeout(function(){

        result.innerText = "Searching for: " + search.value;

        console.log("Searching:", search.value);

    },300);

});