

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre']
//.Concat
const mes = meses.concat(meses3, meses2)

console.log(mes)


const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const months2 = ['Agosto', 'Septiembre']
const month = [...months, ...months2, ...meses3]

console.log(month)