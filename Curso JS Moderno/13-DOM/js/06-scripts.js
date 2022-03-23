const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)


console.log(encabezado.innerText)//  si el texto esta oculto no lo encuentra
console.log(encabezado.innerHTML)  // Trae contenido mas codigo HTML 
console.log(encabezado.textContent)  //Encuentra textos aunque esten ocultos

//document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading'

const imagen = document.querySelector('.card img')
//imagen.src = 'img/hacer2.jpg';
console.log(imagen)