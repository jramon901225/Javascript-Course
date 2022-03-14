//Object literal
const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

//Object constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true
}

const nombre = 'Monitor 24 pulgadas';
const precio = 300;

const producto2 = new Producto(nombre, precio)

console.log(producto2)