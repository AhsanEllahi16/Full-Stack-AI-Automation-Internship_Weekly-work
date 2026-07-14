let products = [

{

id:1,

name:"Laptop",

price:800,

image:"https://picsum.photos/300?1"

},

{

id:2,

name:"Phone",

price:500,

image:"https://picsum.photos/300?2"

},

{

id:3,

name:"Headphones",

price:100,

image:"https://picsum.photos/300?3"

},

{

id:4,

name:"Keyboard",

price:60,

image:"https://picsum.photos/300?4"

},

{

id:5,

name:"Mouse",

price:40,

image:"https://picsum.photos/300?5"

}

];

let productsDiv = document.getElementById("products");

let search = document.getElementById("search");

let sortBtn = document.getElementById("sortBtn");

function displayProducts(data){

    productsDiv.innerHTML="";

    data.forEach(function(product){

        let card=document.createElement("div");

        card.classList.add("card");

        card.innerHTML=`

        <img src="${product.image}">

        <h2>${product.name}</h2>

        <p class="price">$${product.price}</p>

        <p>Product ID : ${product.id}</p>

        `;

        productsDiv.appendChild(card);

    });

}

displayProducts(products);

search.addEventListener("input",function(){

    let text=search.value.toLowerCase();

    let filtered=products.filter(function(product){

        return product.name.toLowerCase().includes(text);

    });

    displayProducts(filtered);

});

sortBtn.addEventListener("click",function(){

    products.sort(function(a,b){

        return a.price-b.price;

    });

    displayProducts(products);

});