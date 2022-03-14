iniciarApp();

function iniciarApp(){
    console.log('iniciando app...')
    segundaFuncion()
};

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Manuel')
}

function usuarioAutenticado(usuario) {
    console.log(`Autenticando ${usuario}... espere...`);
    console.log(`${usuario} autenticado correctamente, `)
    saludo('Manuel')
}

function saludo(usuario) {
    console.log(`Bienvenido ${usuario}`)
}