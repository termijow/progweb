const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const users = [
    {
    name: "juan", age: 20,
},
    { 
    name: "pedro", age: 23
}
];

app.get('/', async (req, res) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        const html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Ejercicio Servidor</title>

        </head>
        <body>
            <h1>Formulario</h1>
            <form id="formulario">
                <input type="text" name="nombre" placeholder="Escribe tu nombre">
                <input type="text" name="apellido" placeholder="Escribe tu apellido">
                <input type="number" name="edad" placeholder="edad">
                <button type="submit">Enviar Datos</button>
            </form>

            <h1>Usuarios</h1>
            <ul>
                ${users.map(user => `<li>${user.name}, ${user.age} años</li>`)}
            </ul>

            <h1>Posts</h1>
            <div id="posts-container">
                ${posts.map(post => `
                    <div class="post">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `)}
            </div>

            <script>

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    // el valor del input

    const nombre = event.target.nombre.value;
    const apellido = event.target.apellido.value;
    const edad = event.target.edad.value;
    alert("a");
    const titulo = document.getElementById("titulo");
    })

            </script>
        </body>
        </html>
        `;
        res.send(html);
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:" + PORT);
});
