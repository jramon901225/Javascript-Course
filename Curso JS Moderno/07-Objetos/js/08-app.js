"use strict";

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}


// this propperty does not let add delete or change any value on producto
Object.freeze( producto )

//producto.imagen = 'imagen.JPG'

console.log(producto)
console.log(Object.isFrozen(producto))