localStorage.setItem("nombre", "Manuel");

const producto = {
  nombre: "Itachi Uchiha - Ambu",
  marca: "Banpresto",
  precio: 899,
};

const productoString = JSON.stringify(producto);
console.log(productoString);

localStorage.setItem("producto", productoString);

const meses = ["enero", "febrero", "marzo"];
const mesesString = JSON.stringify(meses);
console.log(mesesString);

localStorage.setItem("meses", mesesString);
