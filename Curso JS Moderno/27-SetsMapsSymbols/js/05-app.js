//Symbols

const sym2 = Symbol();
const sym = Symbol();

//Los symbols siempre son diferentes, no existen symbols iguales

console.log(sym2 === sym);

const nombre = Symbol("este es el nombre");
const apellido = Symbol("descripcion del symbol");

const persona = {};

//Al agregar algo al constructor pasa como una descripcion
persona[nombre] = "Manuel";
//Para agregar propiedades a un objeto con symbol se agrega con corchetes

console.log(persona[nombre]);

console.log(apellido);

//Las propiedades con symbol no son iterables
