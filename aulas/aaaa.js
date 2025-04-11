//1. Variables y tipos

const nombre = "juan";
const lugar = "medellin";
const edad = 21;

const saludo = "Hola, soy " + nombre + ", tengo " + edad + " primaveras y resido en " + lugar;
console.log(saludo);

//2. Condicionales y operadores

function MultiploDos(valor) {
    if (valor % 2 === 0) {
        return "Numero divisible por 2";
    } else {
        return "No es divisible por 2";
    }
}

console.log(MultiploDos(11));
console.log(MultiploDos(10));

//3. Funciones

function calculadora(x, y) {
    z = 0;
    if (y !== 0) {
        z = x/y;
    } else {
        z = "No valida"
    }
    return {
        suma: x + y,
        resta: x - y,
        producto: x * y,
        cociente: z,    
    };
}

console.log(calculadora(16, 3));

//4. Arrays

let listaNumeros = [33, 12, 5, 89, 20];

console.log("2:", listaNumeros[1]);
listaNumeros.push(100);
console.log("Luego de insertar:", listaNumeros);
listaNumeros.shift();
console.log("Después de quitar el primero:", listaNumeros);

listaNumeros.sort((x, y) => y - x);
console.log("De mayor a menor:", listaNumeros);

//5. Objetos

const pelicula = {
    nombre: "Spiderman",
    director: "José",
    estreno: 2005
};

console.log(`Director: ${pelicula.director}, Lanzamiento: ${pelicula.estreno}`);

//6. Métodos Arrays

const montos = [12, 95, 35, 150, 27, 80];

const montosAltos = montos.filter(monto => monto > 60);
console.log("Montos > 60:", montosAltos);

const totalMonto = montos.reduce((acc, monto) => acc + monto, 0);
console.log("Suma total:", totalMonto);

//7. Bucles

const personas = ["Pepe", "Jose", "Jesus", "Andres", "Felipe"];

for (let j = 0; j < personas.length; j++) {
    console.log(personas[j]);
}

personas.forEach(persona => {
    console.log(persona);
});

const grupo = [
    { alias: "Pepe", calificacion: 4.7 },
    { alias: "Jose", calificacion: 2.5 },
    { alias: "Camilo", calificacion: 5.0 }
];

//8. Actividad final

const exitosos = grupo.filter(item => item.calificacion > 3.0);
console.log("Aprobados:", exitosos);

const totalNotas = grupo.reduce((suma, item) => suma + item.calificacion, 0);
const notaPromedio = totalNotas / grupo.length;
console.log("Media:", notaPromedio);

const topAlumno = grupo.reduce((mejor, actual) =>
    actual.calificacion > mejor.calificacion ? actual : mejor, grupo[0]);
console.log("mejor estudiante:", topAlumno);

