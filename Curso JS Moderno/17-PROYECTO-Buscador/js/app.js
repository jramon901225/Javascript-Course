const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");

const max = new Date().getFullYear();
const min = max - 10;

//Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); // Mostrar los autos al cargar

  //Llena las opciones de años
  llenarselect();
});

//Funciones
function mostrarAutos() {
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
            ${marca} - ${modelo} - ${puertas} Puertas - Año: ${year} -  Transmision: ${transmision} -  Precio: ${precio} - Color: ${color}
        `;
  });
}

//Genera los años del select
function llenarselect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //Agregar opciones de año al select
  }
}
