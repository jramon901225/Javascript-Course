const carrito = [
    { nombre: 'Monitor 27 pulgadas',precio: 500},
    { nombre: 'Tablet',precio: 300},
    { nombre: 'Celular Xiaomi',precio: 800},
    { nombre: 'Xbox',precio: 1200},
    { nombre: 'Audifonos',precio: 450},
    { nombre: 'Mouse',precio: 75},
]

for(let i = 0; i<carrito.length; i++) {
    console.log(carrito[i])
}

carrito.forEach( (producto) => {
console.log(producto.nombre)
})