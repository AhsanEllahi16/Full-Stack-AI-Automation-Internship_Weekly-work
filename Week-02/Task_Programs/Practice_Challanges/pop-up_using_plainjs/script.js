let openBtn = document.getElementById("openBtn");

let closeBtn = document.getElementById("closeBtn");

let popup = document.getElementById("popup");

openBtn.addEventListener("click",function(){

    popup.classList.add("show");

});

closeBtn.addEventListener("click",function(){

    popup.classList.remove("show");

});