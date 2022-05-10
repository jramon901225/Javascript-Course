//Campos del formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

//Interfaz del usuario
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

//Clases
class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id) {
        this.citas = this.citas.filter((cita) => cita.id !== id);
    }

    editarCita(cita) {
        console.log(cita);
    }
}
class UI {
    imprimirAlerta(mensaje, tipo) {
        //Crear div
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

        //Agregar clase en base al tipo
        if (tipo === "error") {
            divMensaje.classList.add("alert-danger");
        } else {
            divMensaje.classList.add("alert-success");
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document
            .querySelector("#contenido")
            .insertBefore(divMensaje, document.querySelector(".agregar-cita"));

        //Quitar la alerta despues de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarCita({ citas }) {
        limpiarHTML();

        citas.forEach((cita) => {
            const {
                mascota,
                propietario,
                telefono,
                fecha,
                hora,
                sintomas,
                id,
            } = cita;

            const divCita = document.createElement("div");
            divCita.classList.add("cita", "p-3");
            divCita.dataset.id = id;

            //Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement("h2");
            mascotaParrafo.classList.add("card-title", "font-weight-bolder");
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement("p");
            propietarioParrafo.innerHTML = `
            <span class="font-weight-bolder">Propietario:</span> ${propietario}
            `;

            const telefonoParrafo = document.createElement("p");
            telefonoParrafo.innerHTML = `
            <span class="font-weight-bolder">Telefono: </span>${telefono}
            `;

            const fechaParrafo = document.createElement("p");
            fechaParrafo.innerHTML = `
            <span class="font-weight-bolder">Fecha:</span> ${fecha}
            `;

            const horaParrafo = document.createElement("p");
            horaParrafo.innerHTML = `
            <span class="font-weight-bolder">Hora:</span> ${hora}
            `;

            const sintomasParrafo = document.createElement("p");
            sintomasParrafo.innerHTML = `
            <span class="font-weight-bolder">Sintomas:</span> ${sintomas}
            `;
            const idParrafo = document.createElement("p");
            idParrafo.innerHTML = `
            <span class="font-weight-bolder">id:</span> ${id}
            `;

            //Boton para eliminar la cita
            const btnBorrar = document.createElement("button");
            btnBorrar.classList.add("btn", "btn-danger", "mr-2");
            btnBorrar.innerHTML = "Eliminar";
            btnBorrar.onclick = () => {
                eliminarCita(id);
            };

            //Añadir boton para editar
            const btnEditar = document.createElement("button");
            btnEditar.classList.add("btn", "btn-info", "mr-2");
            btnEditar.innerHTML = "Editar";
            btnEditar.onclick = () => {
                editarCita(cita);
            };

            //agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(idParrafo);
            divCita.appendChild(btnBorrar);
            divCita.appendChild(btnEditar);

            //Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
        });
    }
}

//Instanciar clases
const ui = new UI();
const administrarCitas = new Citas();

//Registrar Eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener("input", datosCita);
    propietarioInput.addEventListener("input", datosCita);
    telefonoInput.addEventListener("input", datosCita);
    fechaInput.addEventListener("input", datosCita);
    horaInput.addEventListener("input", datosCita);
    sintomasInput.addEventListener("input", datosCita);

    formulario.addEventListener("submit", nuevaCita);
}

//Objeto con la informacion de la cita
citaObj = {
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: "",
};

//Funciones
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
    e.preventDefault();

    //Extraer la informacion del objeto de la cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    //Validar los campos
    if (
        mascota === "" ||
        propietario === "" ||
        telefono === "" ||
        fecha === "" ||
        hora === "" ||
        sintomas === ""
    ) {
        ui.imprimirAlerta("Todos los campos son obligatorios", "error");
        return;
    }

    //Generar un id unico
    citaObj.id = Date.now();
    //Creando una nueva cita
    administrarCitas.agregarCita({ ...citaObj });

    //Reiniciamos el objeto
    reiniciarObjeto();

    //Reiniciar el formulario
    formulario.reset();

    //Mostrar el HTML
    ui.mostrarCita(administrarCitas);
}

function reiniciarObjeto() {
    (citaObj.mascota = ""),
        (citaObj.propietario = ""),
        (citaObj.telefono = ""),
        (citaObj.fecha = ""),
        (citaObj.hora = ""),
        (citaObj.sintomas = "");
}

function limpiarHTML() {
    while (citas.firstChild) {
        citas.removeChild(citas.firstChild);
    }
}

function eliminarCita(id) {
    //Eliminar la cita
    administrarCitas.eliminarCita(id);

    //Muestre un mensaje
    ui.imprimirAlerta("La cita se elimino correctamente");

    //Refrescar las citas

    ui.mostrarCita(administrarCitas);
}

function editarCita(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas } = cita;

    //Llenar los inputs en modo editar
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent =
        "Guardar Cambios";
}
