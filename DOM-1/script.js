// (Este bloque solo funciona si se ejecuta en un navegador con un HTML cargado)

// Obtiene el elemento con id "title"
const title = document.getElementById("title");
console.log(title); // Imprime el elemento (si existe)

// Obtiene el primer elemento con clase "h2"
const h2 = document.querySelector(".h2");
console.log(h2); // Imprime el primer h2 con clase "h2"

// Obtiene todos los elementos con clase "h2"
const h2s = document.querySelectorAll(".h2");
console.log(h2s); // NodeList de elementos

// Obtiene elementos por clase (forma antigua)
const h2_class = document.getElementsByClassName("h2");
console.log(h2_class); // HTMLCollection

// Obtiene todos los elementos <h2>
const t = document.getElementsByTagName("h2");
console.log(t); // HTMLCollection de h2

// Cambia el texto del título
title.textContent = "Hola desde js";
title.textContent = "nuevo tit"

// Inserta un párrafo dentro del contenedor
const container = document.getElementById("container");
const container1 = document.getElementById("container");

container.innerHTML = "<p>Hello desde js</p>";
// container.innerHTML = '<p> texto nuevo </p>';



container1.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/960px-Spider-Man.jpg">';

const fondo = document.querySelector("body");
fondo.style.background="red";
fondo.setAttribute("style", "background-color: #000000");
// fondo.setAttribute("background-color:", "#000000");

const newP = document.createElement("p");
newP.textContent = "Parrafo desde js";

container.appendChild(newP);

const newImage = document.createElement("img");
console.log(newImage);

container.appendChild(newImage);
newImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/960px-Spider-Man.jpg");
newImage.style.width = "100px"