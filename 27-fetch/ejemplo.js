// fetch es una función de JavaScript que podemos utilizar para hacer un 
// Request de datos y obtener un Response con datos en diferentes modos 
// (texto, JSON, Blob).

// Usando fetch podemos consumir REST API's, mandar datos al servidor 
// al submitir un Form o bajar un archivo.

// fetch es un buen remplazo de XMLHttpRequest.

// fetch acepta un parámetro path que puede ser local (nuestra máquina) 
// o remoto (algún servidor)

// fetch retorna una promesa (Promise) que de resolverse exitosamente 
// nos da un objeto Response con la respuesta obtenida

/*
fetch("path").then((response) => {
    console.log(response.ok); // devuelve true / false
    console.log(response.status); // devuelve el código HTTP de status 200, 300, etc
  });
*/

// Response tiene un método (json) que nos permite obtener los datos de 
// la respuesta en formato JSON.

// El método json devuelve una promise.

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

fetch(POKE_API_URL)
  .then((response) => {
    return response.json();
  })
  .then((allPokemon) => console.log(allPokemon));

  // La API usa los parametros offset y limit
  // limit se utiliza para establecer la cantidad de Pokemon que queremos 
  // obtener en cada respuesta

  // offset establece a partir de que recurso queremos obtener la 
  // respuesta. Ejemplo: nos trajo los primeros 20 en el primer request, 
  // podemos usar offset=20 para decir que devuelva a partir del recurso 
  // 21

  // offset nos permite hacer un páginado e ir obteniendo resultados de 
  // manera parcial hasta llegar al final de la lista

  // next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'


  // Utilizando fetch podemos obtener una respuesta con error.
  // como utilizamos promises podemos utilizar el método catch para 
  // manejar el error.

  // cambiamos la URL para que tenga error y forzar que entre en catch
const POKE_API_URL_ERROR = "https://pokeapi.commmmmm/api/v2/pokemon";

fetch(POKE_API_URL_ERROR)
  .then((response) => {
    return response.json();
  })
  .then((allPokemon) => console.log(allPokemon))
  .catch((error) => {
    console.log(error);
  });

// ASYNC AWAIT

  // Dado que fetch utiliza promises nos permite utilizar async / await 
  // para escribir código de una manera más simple.

  async function getPokemon() {
    const response = await fetch(POKE_API_URL);
    const pokemon = await response.json();
  
    console.log(pokemon);
  }
  
  getPokemon();

// Usando async / await podemos manejar el error de dos formas:

// URL con error (dice com en lugar de co)
const POKE_API_URL2 = "https://pokeapi.com/api/v2/pokemon";

async function getPokemon2() {
  const response = await fetch(POKE_API_URL2);
  const pokemon = await response.json();

  console.log(pokemon);
}

// Dado que async devuelve una promise podemos utilizar catch
getPokemon2().catch((error) => {
  console.log("ERROR");
  console.log(error);
});

// Otra forma de manejar error es utilizando try / catch

// URL con error (dice com en lugar de co)
const POKE_API_URL3 = "https://pokeapi.com/api/v2/pokemon";

async function getPokemon3() {
  try {
    const response = await fetch(POKE_API_URL3);
    const pokemon = await response.json();

    console.log(pokemon);
  } catch (error) {
    console.log("ERROR");
    console.log(error);
  }
}

getPokemon3();

// fetch es nativo eso significa que funciona en el Browser o node 
// (nuevas versiones) sin tener que instalar nada.

// Existen otras opciones similares a fetch que nos permiten trabajar 
// de una manera más simple como puede ser Axios o Expo-Fetch
// Estas librerías nos ofrecen herramientas o configuraciones extras 
// que nos simplifican el uso de fetch
// Para poder utilizarlas debemos instalarlas ya que no son nativas 
// al lenguaje.

// En caso simples podemos utilizar fetch pero para proyectos un poco 
// más complejos podemos utilizar Axios o Expo-fetch (si utiliamos 
// Expo en React Native).