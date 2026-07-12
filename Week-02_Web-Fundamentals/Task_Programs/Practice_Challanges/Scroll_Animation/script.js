let box = document.getElementById("box");

window.addEventListener("scroll",function(){

    if(window.scrollY > 30){

        box.classList.add("show");

    }

});