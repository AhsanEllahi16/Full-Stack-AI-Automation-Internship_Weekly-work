let password = document.getElementById("password");
let button = document.getElementById("btn");

button.addEventListener("click", function(){

    if(password.type === "password"){

        password.type = "text";
        button.innerText = "Hide";

    }

    else{

        password.type = "password";
        button.innerText = "Show";

    }

});