//Reemplazar texto en una cadena

const producto = 'Monitor de 20 Pulgadas';

console.log(producto)
console.log(producto.replace('Pulgadas', "\""))
console.log(producto.replace('Monitor', "Monitor Curvo"))

//Para extraer o cortar una cadena de texto
console.log(producto.slice(0,10))
console.log(producto.slice(8))
console.log(producto.slice(2,1))

//Alternativa a slice
console.log(producto.substring(0,10))
console.log(producto.substring(2,1))

const usuario = "Manuel";
console.log(usuario.charAt(0))


