const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

//middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// puerto 3001

const PORT = process.env.PORT || 3001;

app.get('/', (req,res) => res.json("bienvenido"));
app.get('/users', (req,res) => {
const users = [
    {
        "name": "juan",
        "age": 20
    },
    {
        "name": "pedro",
        "age": 23
    },
]
res.json(users)
});
app.listen(PORT,() => {"El servidor está corriendo en " + PORT});
app.use('/posts', (req,res) => {
    
    res.json("bienvenido")
});

async function getUSers() {
    const respose = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataJson = await respose.json();
    console.log(dataJson);
}