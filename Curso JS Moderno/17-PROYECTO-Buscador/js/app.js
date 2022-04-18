const resultado = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();
});

//Funciones
function mostrarAutos() {
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
            ${marca} - ${modelo} - ${puertas} Puertas - Año: ${year} -  Transmision: ${transmision} -  Precio: ${precio} - Color: ${color}
        `;

    //Insertar en el html
    resultado.appendChild(autoHTML);
  });
}
