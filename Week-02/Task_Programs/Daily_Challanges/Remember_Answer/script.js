let cache = {};

let users = {

    1:"Ali",

    2:"Sara",

    3:"Ahmed",

    4:"Ahsan"

};

let input = document.getElementById("userId");

let button = document.getElementById("getBtn");

let result = document.getElementById("result");

button.addEventListener("click",function(){

    let id = input.value;

    if(cache[id]){

        console.log("Loaded From Cache");

        result.innerText = "Cache : " + cache[id];

    }

    else{

        console.log("Fetching From Server");

        let user = users[id];

        if(user){

            cache[id] = user;

            result.innerText = "Server : " + user;

        }

        else{

            result.innerText = "User Not Found";

        }

    }

});