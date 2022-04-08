window.addEventListener('scroll', ()=> {

   const premium = document.querySelector('.premium')
   const ubicacion = premium.getBoundingClientRect()

   if(ubicacion.top < 784) {
       console.log('el elemento esta visible')
   } else {
       console.log('aun no esta visible')
   }
})