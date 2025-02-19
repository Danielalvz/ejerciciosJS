const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

async function getPokemon() {
  try {
    const response = await fetch(POKE_API_URL);

    if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
    }

    const data = await response.json();

    const eachPokemon = data.results

    eachPokemon.forEach((pokemon, i) => {
        const name = pokemon.name;
        const capitalized = name.charAt(0).toUpperCase() + name.substring(1);
        console.log(`Pokemon ${i + 1}: ${capitalized}`);
    });
  } catch (error) {
    console.log("ERROR en la solicitud: ");
    console.log(error);
  }
}

getPokemon();
