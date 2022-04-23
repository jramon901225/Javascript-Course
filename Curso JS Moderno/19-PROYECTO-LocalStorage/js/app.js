//Variables

const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//Event Listeners

eventListeners();

function eventListeners() {
  //Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  //Cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    crearHTML();
  });
}

//Funciones
function agregarTweet(e) {
  e.preventDefault();

  //Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  //Validacion...
  if (tweet === "") {
    mostrarError("No se pueden publicar tweets vacios");
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet,
  };

  //Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];

  //Una vez agregado creamos el HTML
  crearHTML();

  //Limpiar el textarea
  formulario.reset();
}

function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //Insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  //Eliminar el mensaje de error
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//Mostrar un listado de los tweets
function crearHTML() {
  limpiarHTML();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Agregar un boton para eliminar el tweet
      const btneliminar = document.createElement("a");
      btneliminar.classList.add("borrar-tweet");
      btneliminar.innerHTML = "X";

      //Añadir la funcion de eliminar
      btneliminar.onclick = () => {
        borrarTweet(tweet.id);
      };

      //Crear el HTML
      const li = document.createElement("li");

      //Añadir Texto
      li.textContent = tweet.tweet;

      //Asignar el boton
      li.appendChild(btneliminar);

      //Insertarlo en el HTML
      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

//Agrega los tweets actuales a storage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

//Eliminar un tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearHTML();
}

function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
