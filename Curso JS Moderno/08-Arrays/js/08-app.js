const carrito = [];

//Definir un producto

const producto = {
    nombre : "Monitor 32 pulgadas",
    precio : 400
}


const { nombre } = producto

console.log(nombre);

//Desctructuring con arreglos

const numeros = [10,20,30,40,50]

const [primero, ...cuarto] = numeros

console.log(cuarto)