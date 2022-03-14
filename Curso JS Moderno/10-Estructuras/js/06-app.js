const login = false;
const pago = true;

// if(login) {
//     console.log('si esta registrado')
// } else if(pago) {
//    console.log( 'Si puede pagar')
// }

// if(login && pago) {
//     console.log('si puedes comprar')
// } else {
//     console.log('No puedes comprar')
// }

if(!login) {
    console.log('Inicia Sesion')
} else if(!pago) {
    console.log( 'No puede pagar')
 }else {
    console.log('No puedes comprar')
}