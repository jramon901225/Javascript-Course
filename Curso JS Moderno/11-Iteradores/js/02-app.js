// for(let i = 0; i <= 10; i ++  ) {
//     if( i === 5){
//       console.log  (`Cinco`)
//       continue
//     }
//     console.log(`Numero ${i}`)
// }

const carrito = [
    { nombre: 'Monitor 27 pulgadas',precio: 500},
    { nombre: 'Tablet',precio: 300, descuento : true},
    { nombre: 'Celular Xiaomi',precio: 800},
    { nombre: 'Xbox',precio: 1200},
    { nombre: 'Audifonos',precio: 450},
    { nombre: 'Mouse',precio: 75},
]

for(let i = 0; i <carrito.length; i ++){
    if(carrito[i].descuento){
        console.log(`el articulo ${carrito[i].nombre} tiene descuento`)
        continue
    }
    console.log(carrito[i].nombre)   
}
