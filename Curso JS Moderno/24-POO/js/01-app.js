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
console.log(manuel);
console.log(manuel.mostrarInformacion());
console.log(Cliente.Saludar());
