export const ahorro = 200;

export function mostrarInformacion(nombreCliente, ahorro) {
    return `Cliente: ${nombreCliente} - ahorro: ${ahorro}`;
}

export function mostrarDatos(nombre, saldo) {
    return `Este es el usuario: ${nombre} y el saldo restante es: ${saldo}`;
}

export class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.saldo}`;
    }
}
