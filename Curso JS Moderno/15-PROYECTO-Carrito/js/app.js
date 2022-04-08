//Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')

cargarEventListeners()
function cargarEventListeners() {
    //Agregamos curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);

}

//Funciones
function agregarCurso(e) {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        console.log('agregando al carrito')
    }
}