const reproductor = {
    reproducir : id => console.log(`Reproduciendo cancion con el id ${id}`),    
    pausar : () => console.log(`Pausando cancion con el id ${id}`),   
    borrar : () =>  console.log(`Borrando cancion con el id ${id}`),   
    crearPlaylist : () => console.log(`Creada lista de reproduccion ${nombre}`),
    playlist : id => console.log(`Reproduciendo playlist ${nombre}...`),

    set nuevaCancion(cancion) {
        this.cancion = cancion
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`)
    } 
}

reproductor.nuevaCancion = 'Como te va'
reproductor.obtenerCancion;



const id = 27
const nombre = 'Gym'

reproductor.reproducir(id)      
reproductor.pausar(id)      
reproductor.reproducir(id)   
reproductor.crearPlaylist(nombre)
reproductor.playlist(nombre)   
