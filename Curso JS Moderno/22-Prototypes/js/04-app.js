Cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinium";
  } else {
    tipo = "Normal";
  }
  return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, saldo: ${
    this.saldo
  }, Tipo Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
};

function Persona(nombre, saldo, telefono) {
  Cliente.call(this, nombre, saldo); //Llama los metodos de Cliente
  this.telefono = telefono;
}

//Para que las funciones aparezcan en el prototype
Persona.prototype = Object.create(Cliente.prototype);

// Aparece el constructor
Persona.prototype.constructor = Cliente;

const manuel = new Persona("Manuel", 8000, 9983353823);
console.log(manuel);
