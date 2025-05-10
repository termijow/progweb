const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const fetch = require('node-fetch'); // Instala con: npm install express cors morgan node-fetch

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const users = [
    { name: "juan", age: 20 },
    { name: "pedro", age: 23 }
];

// Ruta principal que devuelve HTML con todo renderizado
app.get('/', async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        const html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Usuarios y Posts</title>

        </head>
        <body>
            <h1>Formulario</h1>
            <form id="formulario">
                <input type="text" name="nombre" placeholder="Escribe tu nombre">
                <input type="text" name="apellido" placeholder="Escribe tu apellido">
                <input type="number" name="edad" placeholder="Edad">
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
                `).join('')}
            </div>

            <script>
                document.getElementById('formulario').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const datos = new FormData(this);
                    const obj = Object.fromEntries(datos.entries());
                    alert('Datos enviados: ' + JSON.stringify(obj));
                });
            </script>
        </body>
        </html>
        `;

        res.send(html);
    } catch (error) {
        res.status(500).send("Error al obtener los posts.");
    }
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:" + PORT);
});
