const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

//Object.seal(producto);

producto.disponible = false
producto.stock = 20



console.log(producto)
console.log(Object.isSealed(producto))