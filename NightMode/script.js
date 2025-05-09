
// funcion del evento click
function saludar() {
    alert("Bienvenido");
}

const click = document.getElementById("parrafo");
const body = document.getElementsByTagName("body");

click.style.cursor = "pointer";

// callback

click.addEventListener("click", () => {
    document.body.style.backgroundColor ="red"; // background
})

// formulario 

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    // el valor del input

    const name = event.target.nombre.value;
    const apellido = event.target.apellido.value;
    const edad = event.target.edad.value;

    const titulo = document.getElementById("titulo");
    titulo.innerHTML = `<h2>${name} - ${apellido} - ${edad}</h2>`;
})

fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
        // espera la respuesta
        console.log(response);
        return response.json();
    }
).then(
    (data) => {
        console.log(data);
    }
);

fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
        // espera la respuesta
        console.log(response);
        return response.json();
    }
).then(
    (data) => {
        console.log(data);
    }
);

// async - await

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataJson = await response.json();

    console.log(dataJson);

    const mi_lista = document.getElementById("text");

    dataJson.forEach(element => {  
        const li =  document.createElement("li");
        li.textContent = `nombre: ${element.name} - username: ${element.username}`;

        mi_lista.appendChild(li);
        
    });
}

getUsers();