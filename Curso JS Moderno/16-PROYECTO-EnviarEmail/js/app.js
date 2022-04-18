//Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


//Event Listeners
eventListeners();
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)

    //Enviar email
    formulario.addEventListener('submit', enviarEmail)

    //Reset al formulario desde boton
    btnReset.addEventListener('click', resetForm)
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
        if(error) {
            error.remove()
        }
        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
        
    } else {
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500')
        mostrarError('Todos los campos son obligatorios')
    }

    if(e.target.type === 'email') {
        
        if(er.test (email.value)) {
            const error = document.querySelector('p.error')
            if(error) {
                error.remove()
            }
        } else {
            e.target.classList.add('border', 'border-red-500')
            mostrarError('Email no valido')
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
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

function enviarEmail(e) {
    e.preventDefault()
   //Mostrar el spinner
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'flex'

    //Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none'

        //Mensaje que envie corrrectamente
        const msjExito = document.createElement('p');
        msjExito.textContent = 'El email ha sido enviado exitosamente'
        msjExito.classList.add('border', 'text-white', 'bg-green-500','p-3','mb-4', 'text-center')
        formulario.insertBefore(msjExito, spinner)

        setTimeout(()=> {
            msjExito.remove()//Eliminar el mensaje de exito
            resetForm(e)
            
        },3000)
    }, 3000);
}

//Funcion que reestablece el formulario

function resetForm(e) {
    e.preventDefault()
    formulario.reset()
    iniciarApp()
    
}