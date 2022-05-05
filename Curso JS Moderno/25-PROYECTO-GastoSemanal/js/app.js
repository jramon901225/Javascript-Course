//Variables
const formulario = document.querySelector("#agregar-gasto");
const listaGastos = document.querySelector("#gastos ul");

//Eventos
eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

    formulario.addEventListener("submit", agregarGasto);
}

//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    agregarGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad;
        document.querySelector("#total").textContent = presupuesto;
        document.querySelector("#restante").textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        //Crear div para plasmar el mensaje
        const divAlerta = document.createElement("div");
        divAlerta.classList.add("text-center", "alert");
        //Verificamos el tipo de mensaje
        if (tipo === "error") {
            divAlerta.classList.add("alert-danger");
        } else {
            divAlerta.classList.add("alert-success");
        }
        //Agregamos el texto al mensaje
        divAlerta.textContent = mensaje;
        //Insertamos en el HTML
        document.querySelector(".primario").insertBefore(divAlerta, formulario);

        //Quitar el mensaje
        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }

    agregarGastoListado(gasto) {
        console.log(gasto);
    }
}

//Instanciar
const ui = new UI();
let presupuesto;

//Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt("¿Cual es tu presupuesto");
    if (
        presupuestoUsuario === "" ||
        presupuestoUsuario === null ||
        isNaN(presupuestoUsuario) ||
        presupuestoUsuario <= 0
    ) {
        window.location.reload();
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    const nombreGasto = document.querySelector("#gasto").value;
    const cantidad = Number(document.querySelector("#cantidad").value);

    if (nombreGasto === "" || cantidad === "") {
        ui.imprimirAlerta("Ambos campos son obligatorios", "error");
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta("La cantidad ingresada no es correcta", "error");
        return;
    } else {
        ui.imprimirAlerta("Gasto agregado con exito", "success");
    }

    const gasto = {
        nombreGasto,
        cantidad,
        id: Date.now(),
    };

    presupuesto.agregarGasto(gasto);

    const { gastos } = presupuesto;

    ui.agregarGastoListado(gastos);

    formulario.reset();
}
