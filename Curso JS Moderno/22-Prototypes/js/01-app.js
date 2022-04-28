function Cliente(nombre, saldo) {
  (this.nombre = nombre), (this.saldo = saldo);
}

const manuel = new Cliente("Manuel", 8000);

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `el Cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(manuel));

function Empresa(nombre, saldo, categoria) {
  (this.nombre = nombre), (this.saldo = saldo), (this.categoria = categoria);
}

const OhmManu = new Empresa("Funkos", 20000, "Ventas en Linea");

function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;
  return `la empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria de ${categoria}`;
}

console.log(formatearEmpresa(OhmManu));
