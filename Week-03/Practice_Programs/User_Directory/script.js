let button = document.getElementById("loadBtn");

let usersDiv = document.getElementById("users");

button.addEventListener("click", loadUsers);

async function loadUsers(){

    try{

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let users = await response.json();

        usersDiv.innerHTML = "";

        users.forEach(function(user){

            usersDiv.innerHTML += `

            <div class="card">

                <h2>${user.name}</h2>

                <p>Email : ${user.email}</p>

                <p>Phone : ${user.phone}</p>

            </div>

            `;

        });

    }

    catch(error){

        usersDiv.innerHTML = "<h2>Unable to Load Users</h2>";

    }

}