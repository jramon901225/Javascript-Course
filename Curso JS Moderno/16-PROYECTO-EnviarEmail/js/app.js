//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')


//Event Listeners
eventListeners();
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)
}

//Funciones

function iniciarApp() {
    btnEnviar.disabled = true
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

function validarFormulario(e) {

    if(e.target.value.length > 0) {
        //Eliminar errores...
        const error = document.querySelector('p.error')
        error.remove()

        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
        
    } else {
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500')
        mostrarError('Todos los campos son obligatorios')
    }

    if(e.target.type === 'email') {
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if(er.test (e.target.value)) {
            console.log('Email Valido')
        } else {
            e.target.classList.add('border', 'border-red-500')
            mostrarError('Email no valido')
        }
    }
}

function mostrarError(mensaje) {
    const msjError = document.createElement('p');
    msjError.textContent = mensaje
    msjError.classList.add('border', 'border-red-500', 'background-red-200', 'text-red-500', 'p-3', 'mt-2', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(msjError)
    }
}