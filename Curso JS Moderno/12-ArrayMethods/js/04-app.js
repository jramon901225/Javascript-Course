const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;
let total;

resultado = carrito.filter( p => p.precio > 400 )
resultado = carrito.filter( p => p.precio < 600)
resultado = carrito.filter( p => p.nombre !== 'Audifonos')
resultado = carrito.filter( p => p.nombre === 'Audifonos')


console.log(resultado)
console.log(total)