const properties = ["name", "price", "quantitySold", "locality"];

const games = [
    {
      name: "Crash Bandicoot N. Sane Trilogy game Ps4 Fisico Sellado",
      price: 1060,
      quantitySold: 276,
      locality: "Capital Federal"
    },
    {
      name: "Lego Marvel Super Heroes",
      price: 700,
      quantitySold: 48,
      locality: "Capital Federal"
    },
    {
      name: "Gta V Ps4 Físico",
      price: 1449,
      quantitySold: 82,
      locality: "Santa Fe"
    },
    {
      name: "Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo",
      price: 1190,
      quantitySold: 348,
      locality: "Capital Federal"
    },
    {
      name: "Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado",
      price: 1250,
      quantitySold: 445,
      locality: "Buenos Aires"
    },
    {
      name: "Fifa 2017 game Físico Play 4 Nuevo!!!!!!",
      price: 890,
      quantitySold: 182,
      locality: "Capital Federal"
    },
    {
      name: "Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4",
      price: 950,
      quantitySold: 517,
      locality: "Capital Federal"
    },
    {
      name: "Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!",
      price: 940,
      quantitySold: 275,
      locality: "Capital Federal"
    },
    {
      name: "Need For Speed Ps4 Físico Nuevo Sellado Playstation",
      price: 790,
      quantitySold: 89,
      locality: "Capital Federal"
    },
    {
      name: "Lego Batman",
      price: 1000,
      quantitySold: 39,
      locality: "Capital Federal"
    },
    {
      name: "Fifa 17 Ps4 Original Fisico 2017",
      price: 1290,
      quantitySold: 310,
      locality: "Capital Federal"
    },
    {
      name: "Resident Evil 7 Ps4 Biohazard Físico",
      price: 1390,
      quantitySold: 154,
      locality: "Capital Federal"
    },
    {
      name: "Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick",
      price: 1390,
      quantitySold: 241,
      locality: "Capital Federal"
    }
  ];

// Recorrer la lista de juegos y mostrar el valor de cada propiedad de
// cada juego utilizando los valores de la variable propiedades

// Ejemplo para mostrar la propiedad nombre de cada juego utilizar el 
// primer elemento de la variable propiedades
// Hacer esto con el resto de las propiedades
games.forEach(game => {
    console.log("JUEGO");
    properties.forEach(prop => {
        console.log(`${prop}: ${game[prop]}`);
    });
    console.log("\n");
});