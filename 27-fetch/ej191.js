// Utilizando fetch intenta obtener los datos de la API 
// https://pokeapi.co/api/v2/pokemon.

// Utiliza Promises para manejar el resultado de fetch
// Parsea el JSON y muestra en pantalla los nombres de los primeros 20 Pokemones

// Mostrar los nombres con la primer letra en mayúscula (repaso de charAt, 
// toUpperCase, substring)

// Manejar tanto el caso de éxito como el de error al hacer el pedido de Pokemones.
// En caso de Error mostrar el error en pantalla

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

fetch(POKE_API_URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        return response.json();       
    }).then((data) => {
        const eachPokemon = data.results

        eachPokemon.forEach((pokemon) => {
            const name = pokemon.name;
            const capitalized = name.charAt(0).toUpperCase() + name.substring(1);
            console.log(`Pokemon: ${capitalized}`);
        });
    })
    .catch((error) => {
        console.log("Error al obtener los Pokémon:", error);
    });

// Otra forma de hacerlo
console.log("SEGUNDA FORMA ------------------");

const POKE_API_URL2 = "https://pokeapi.co/api/v2/pokemon?limit=20";

async function getPokemon() {
  try {
    const response = await fetch(POKE_API_URL2);

    if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
    }

    const data = await response.json();

    const eachPokemon = data.results

    eachPokemon.forEach((pokemon, i) => {
        const name = pokemon.name;
        const capitalized = name.charAt(0).toUpperCase() + name.substring(1);
        console.log(`Pokemon ${i}: ${capitalized}`);
    });
  } catch (error) {
    console.log("ERROR en la solicitud: ");
    console.log(error);
  }
}

getPokemon();

