// for(let i = 0; i <= 10; i ++  ) {
//     console.log(`Numero ${i}`)
// }

// for(let i = 0; i <= 20; i++){
//     if(i % 2 === 0) {
//         console.log(`Pares ${i}`)
//     }else {
//         console.log(`impares ${i}`)
//     }
// }

const carrito = [
    { nombre: 'Monitor 27 pulgadas',precio: 500},
    { nombre: 'Tablet',precio: 300},
    { nombre: 'Celular Xiaomi',precio: 800},
    { nombre: 'Xbox',precio: 1200},
    { nombre: 'Audifonos',precio: 450},
    { nombre: 'Mouse',precio: 75},
]

for(let i = 0; i < carrito.length; i ++){
    console.log(carrito[i].nombre)
}

console.log(carrito.length)