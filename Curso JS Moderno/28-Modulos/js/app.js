import { ahorro } from "./cliente.js";
import { mostrarInformacion } from "./cliente.js";
import { mostrarDatos } from "./cliente.js";
import { Cliente } from "./cliente.js";

const cliente = mostrarInformacion("Manuel", 4000);

console.log(cliente);

const nuevoCliente = mostrarDatos("Samuel", 6000);

console.log(nuevoCliente);

const usuario = new Cliente("Mario", 4500);

console.log(usuario.mostrarInformacion());
