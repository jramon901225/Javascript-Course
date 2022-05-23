//Se coloca un * antes del nombre del Generador
function* crearGenerador() {
    yield 1;
    yield "Juan";
    yield 3 * 3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador);

function* iterarCarrito(carrito) {
    for (i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

const ciclo = iterarCarrito(carrito);

console.log(ciclo.next());
console.log(ciclo.next());
console.log(ciclo.next());
console.log(ciclo.next());
