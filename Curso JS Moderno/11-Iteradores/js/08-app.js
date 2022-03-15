// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Ejercitarse', 'Estudiar']


// for(let pendiente in pendientes) {
//     console.log(pendiente)
// }

const auto = { 
    modelo : 'Camaro',
    year   : 1969,
    motor  : '6.0'
}

// for(let prop in auto) {
//     console.log(`${auto[prop]}`)
// }

for(let [llave, valor] of Object.entries(auto)) {
    console.log(valor)
    console.log(llave)
}