//Creando Enlace
const enlace = document.createElement('a');

//Agregando texto
enlace.textContent = 'Entrega Inmediata'

//Añadiendo href
enlace.href = '#'

enlace.target = '_blank'

//Seleccionar navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[0])

//console.log(enlace)

//Crear un Card de forma dinamica
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$800 por persona'
parrafo3.classList.add('precio')


//Crear DIV con la clase de info
const info = document.createElement('div')
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//Crear imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'

//Crear Card
const card = document.createElement('div');
card.classList.add('card')

//Asignar imagen
card.appendChild(imagen)

//Asignar info
card.appendChild(info)

//Insertar en el HTML

const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)
console.log(card)