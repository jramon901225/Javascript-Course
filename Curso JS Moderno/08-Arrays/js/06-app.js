const carrito = [];

//Definir un producto

const producto = {
    nombre : "Monitor 32 pulgadas",
    precio : 400
}

const producto2 = {
    nombre: 'Tablet',
    precio: 500
}

const producto3 = {
    nombre: 'Teclado',
    precio: 250
}

let resultado = [...carrito,producto]

console.table(resultado)
