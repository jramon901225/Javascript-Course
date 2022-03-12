const producto = 'Monitor de 20 Pulgadas';

//.repeat te va a permitir repetir una cadena de texto

const texto = ' en Promocion'.repeat(3);
console.log(producto + texto)
console.log(`${producto}${texto}!!!`)

//Split, dividir un string

const actividad = 'Estoy aprendiendo javascript moderno'
console.log(actividad.split(' '))

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar'
console.log(hobbies.split(','))

const tweet = "Aprendiendo Javascript Moderno #JSModernoCon Manuel"
console.log(tweet.split('#'))