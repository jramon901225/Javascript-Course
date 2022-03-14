const dinero = 600;
const totalAPagar = 500
const tarjeta = true

if(dinero > totalAPagar) {
    console.log('Si podemos pagar')
} else if(tarjeta) {
    console.log('Si puedo pagar con tarjeta')
}else {
    console.log('Fondos Insuficientes')
}