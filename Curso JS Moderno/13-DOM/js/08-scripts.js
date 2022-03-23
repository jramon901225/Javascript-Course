// const nav =  document.querySelector('.navegacion');

// console.log(nav)
// console.log(nav.childNodes) //Los espacios en blanco son considerados como elementos
// console.log(nav.children) //Envia solo elementos reales

// console.log(nav.children[0])

const card = document.querySelector('.card')
// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM'
// console.log(card.children[0])

//TRAVERSIN DEL HIJO AL PADRE
console.log(card.parentElement.parentElement.parentElement)

//Traversin de hermano a hermano
console.log(card.nextElementSibling.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4)')

console.log(ultimoCard.previousElementSibling)