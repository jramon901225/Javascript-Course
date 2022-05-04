class Cliente {
    constructor(nombre, saldo) {
        (this.nombre = nombre), (this.saldo = saldo);
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} su saldo es ${this.saldo}`;
    }

    static Saludar() {
        return `Bienvenido al Cajero`;
    }
}

const manuel = new Cliente("Manuel", 400);

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, giro) {
        super(nombre, saldo);
        (this.telefono = telefono), (this.giro = giro);
    }
    static Saludar() {
        return `Bienvenido al Cajero Banamex`;
    }
}

const empresa = new Empresa(
    "Funkos Mexico",
    150000,
    9983353823,
    "Ventas en Linea"
);
console.log(empresa);
console.log(Cliente.Saludar());
console.log(Empresa.Saludar());
