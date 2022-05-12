const cliente = new Map();

cliente.set("true", "true");
cliente.set("nombre", "copito");

console.log(cliente.has("true"));
console.log(cliente.get("nombre"));

console.log(cliente);

//Los Maps son iterables y pueden recibir argumentos en su constructor
//si reciben una clave con el mismo nombre esta reescribira a la existente en el valor de la misma
