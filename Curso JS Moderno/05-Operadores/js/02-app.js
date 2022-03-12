const num1 = 20;
const num2 = '20';
const num3 = 30

//revisar si 2 numeros son iguales

console.log(num1 == num3)
console.log(num1 == num2)

//Comparador estricto
console.log(num1 === parseInt(num2))//false
console.log(num1 === num3)//false

//Diferente
const password1 = 'admin'   
const password2 = 'Admin'

console.log(password1 != password2)
console.log(num1 != num2)//tienen el mismo valor pero son de diferente tipo
console.log(num1 !== num2)//Si son diferentes

