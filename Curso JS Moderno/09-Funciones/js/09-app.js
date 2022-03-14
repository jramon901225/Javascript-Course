const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar : function(id) {
        console.log(`Pausando cancion con el id ${id}`)
    },
    borrar : function(id) {
        console.log(`Borrando cancion con el id ${id}`)
    },
    crearPlaylist : function(name) {
        console.log(`Creada lista de reproduccion ${name}`)
    },
    playlist : function(name) {
        console.log(`Reproduciendo playlist ${name}...`)
    }

}

const id = 27
const nombre = 'Gym'

reproductor.reproducir(id)      
reproductor.pausar(id)      
reproductor.reproducir(id)   
reproductor.crearPlaylist(nombre)
reproductor.playlist(nombre)   

