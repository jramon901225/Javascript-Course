const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Ejercitarse', 'Estudiar']

const carrito = [
    { nombre: 'Monitor 27 pulgadas',precio: 500},
    { nombre: 'Tablet',precio: 300},
    { nombre: 'Celular Xiaomi',precio: 800},
    { nombre: 'Xbox',precio: 1200},
    { nombre: 'Audifonos',precio: 450},
    { nombre: 'Mouse',precio: 75},
]

for(let pendiente of pendientes) {
    console.log(pendiente)
}

for(let producto of carrito) {
    console.log(producto.nombre)
}