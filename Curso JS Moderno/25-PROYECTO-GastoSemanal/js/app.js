//Variables

const formulario = document.querySelector("agregar-gasto");
const gastos = document.querySelector("#gastos ul");

//Eventos

document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

//Clases

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {}

const presupuesto = new Presupuesto(500);
const ui = new UI();

//funciones

function preguntarPresupuesto() {
    const alert = window.prompt("¿Cual es tu presupuesto?");

    if (alert === "" || alert === null || alert <= 0 || isNaN(alert)) {
        window.location.reload();
    }
}
