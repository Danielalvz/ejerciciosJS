// JSON.parse transforma un objeto JSON en objeto de JavaScript.
// JSON.stringify transforma un objeto JavaScript en objeto de JSON.

const json = `{
    "character": {
      "name": "Aria the Brave",
      "class": "Warrior",
      "level": 10,
      "hp": 120,
      "mana": 50,
      "equipment": {
        "weapon": {
          "name": "Flaming Sword",
          "damage": 35,
          "element": "Fire"
        },
        "armor": {
          "name": "Dragon Scale Shield",
          "defense": 50
        }
      },
      "inventory": [
        { "item": "Health Potion", "type": "Consumable", "effect": "+50 HP" },
        { "item": "Mana Potion", "type": "Consumable", "effect": "+30 Mana" },
        {
          "item": "Mystic Gem",
          "type": "Artifact",
          "effect": "Boosts magic power"
        }
      ],
      "quests": [
        { "name": "Slay the Dragon", "status": "Completed" },
        { "name": "Find the Lost Amulet", "status": "In Progress" }
      ]
    }
  }`;

//   Transformar el JSON en un objeto de JavaScript.
// Extraer y mostrar el name, class and level del personaje (character).
// Iterar la colección de inventory y mostrar el name y effect de cada item en pantalla.
// Mostar el name de los quests que todavía están en status In Progress.

const objectJs = JSON.parse(json);

console.log(objectJs);

// Datos personaje
const character = objectJs.character;
console.log(`Nombre: ${character.name}`);
console.log(`Clase: ${character.class}`);
console.log(`Nivel: ${character.level}`);

// Iterar sobre el inventario y mostrar el nombre y efecto de cada item
console.log("Inventario:");
character.inventory.forEach(item => {
    console.log(`- ${item.item}: ${item.effect}`);
});

// Mostrar los nombres de las quests en progreso
console.log("Quests en progreso:");
character.quests
    .filter(quest => quest.status === "In Progress")
    .forEach(quest => console.log(`- ${quest.name}`));