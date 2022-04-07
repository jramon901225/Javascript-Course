const nav = document.querySelector('.navegacion')

//Registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion')
    nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando en la navegacion')
    nav.style.backgroundColor = 'white'

})


// mousedown - similar al click
//click
//dblclick - doubleclick
//mouseup - cuando sueltas el click
