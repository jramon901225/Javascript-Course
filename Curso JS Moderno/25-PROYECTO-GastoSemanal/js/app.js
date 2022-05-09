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
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce(
            (total, gasto) => total + gasto.cantidad,
            0
        );
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
        this.calcularRestante();
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
        //elimina el HTML previo
        this.limpiarHTML();

        //Iteramos sobre gastos

        gasto.forEach((gasto) => {
            const { cantidad, nombreGasto, id } = gasto;

            //Crear LI
            const nuevoGasto = document.createElement("li");
            nuevoGasto.className =
                "list-group-item d-flex justify-content-between align-items-center";
            nuevoGasto.dataset.id = id;

            //Agregamos al HTML
            nuevoGasto.innerHTML = ` ${nombreGasto} <span class="badge badge-primary badge-pill"> $ ${cantidad}</span>`;

            //Boton para borrar el gasto
            const btnBorrar = document.createElement("button");
            btnBorrar.textContent = "Eliminar";
            btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            };

            //Agregar boton para borrar el gasto
            nuevoGasto.appendChild(btnBorrar);

            //Agregar al HTML
            listaGastos.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while (listaGastos.firstChild) {
            listaGastos.removeChild(listaGastos.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector("#restante").textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector(".restante");

        //Comprobar el gasto de 25%
        if (presupuesto / 4 > restante) {
            restanteDiv.classList.remove("alert-success", "alert-warning");
            restanteDiv.classList.add("alert-danger");
        } else if (presupuesto / 2 > restante) {
            restanteDiv.classList.remove("alert-success");
            restanteDiv.classList.add("alert-warning");
        } else {
            restanteDiv.classList.remove("alert-danger", "alert-warning");
            restanteDiv.classList.add("alert-success");
        }

        //Si el total es cero o menor
        if (restante <= 0) {
            ui.imprimirAlerta("el presupuesto ya se ha agotado", "error");
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

//Instanciamos las clases
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

    const { gastos, restante } = presupuesto;

    ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    formulario.reset();
}

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);

    //Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}
