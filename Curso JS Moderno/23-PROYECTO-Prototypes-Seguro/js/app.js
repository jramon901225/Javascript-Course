//Constructores
function Seguro(marca, year, type) {
    (this.marca = marca), (this.year = year), (this.type = type);
}

Seguro.prototype.cotizarSeguro = function () {
    /*
       americana = por 1.15
       Asiatica = por 1.05
       Europea = por 1.35
  */

    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case "1":
            cantidad = base * 1.15;
            break;
        case "2":
            cantidad = base * 1.05;
            break;
        case "3":
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    /*
        Por cada año se restara un 3 porciento a cantidad final
  */

    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= (diferencia * 3 * cantidad) / 100;

    const tipo = this.type;

    if (tipo === "basico") {
        cantidad *= 1.3;
    } else {
        cantidad *= 1.5;
    }

    return cantidad.toFixed(2);
};

function UI() {}

//Llenar el select de años

UI.prototype.selectYear = () => {
    const max = new Date().getFullYear();

    min = max - 20;

    const year = document.querySelector("#year");

    for (i = max; i > min; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
};

UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement("div");
    if (tipo === "error") {
        div.classList.add("error");
    } else {
        div.classList.add("correcto");
    }

    div.classList.add("mt-10");
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector("#cotizar-seguro");
    const resultado = document.querySelector("#resultado");
    formulario.insertBefore(div, resultado);

    setTimeout(() => {
        div.remove();
    }, 3000);
};

UI.prototype.mostrarResultado = (total, seguro) => {
    const { marca, year, type } = seguro;

    let valor;
    //Crear el resultado
    const div = document.createElement("div");
    div.classList.add("mt-10");

    switch (marca) {
        case "1":
            valor = "Americano";
            break;
        case "2":
            valor = "Asiatico";
            break;
        case "3":
            valor = "Europeo";
            break;

        default:
            break;
    }

    div.innerHTML = `
    <p class='header'>Tu Resumen</p>
    <p class='font-bold'>Marca: <span class ='font-normal'> ${valor}</span> </p>
    <p class='font-bold'>Año: <span class ='font-normal'> ${year}</span> </p>
    <p class='font-bold'>Seguro: <span class ='font-normal capitalize'> ${type}</span> </p>
    <p class='font-bold'>Total: <span class ='font-normal'>$ ${total}</span> </p>
   
  `;

    const resultadoDiv = document.querySelector("#resultado");

    //Mostrar el spinner
    const spinner = document.querySelector("#cargando");
    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none";
        resultadoDiv.appendChild(div);
    }, 3000);
};

const ui = new UI();

//Cargar las funciones al abrir la pagina
document.addEventListener("DOMContentLoaded", () => {
    ui.selectYear();
});

//Event listeners
eventListeners();
function eventListeners() {
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    //Obtener el value de la marca
    const marca = document.querySelector("#marca").value;
    //Obtener el value del año
    const year = document.querySelector("#year").value;
    //Obtener el value del tipo
    const type = document.querySelector("input[name='tipo']:checked").value;

    if (marca === "" || year === "" || type === "") {
        ui.mostrarMensaje(
            "No paso la validacion, revisar el formulario",
            "error"
        );
        return;
    }

    ui.mostrarMensaje("Cotizando...", "exito");

    const resultados = document.querySelector("#resultado div");

    if (resultados !== null) {
        resultados.remove();
    }

    //Instanciar el seguro

    const seguro = new Seguro(marca, year, type);
    const total = seguro.cotizarSeguro();

    //Utilizar el prototype que va a cotizar
    ui.mostrarResultado(total, seguro);
}
