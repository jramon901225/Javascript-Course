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

carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3)

console.table(carrito)
