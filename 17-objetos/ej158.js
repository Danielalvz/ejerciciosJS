const area = 1;

let localityFiltered;

if (area === 1) {
    localityFiltered = "Capital Federal";
} else if (area === 2) {
    localityFiltered = "Santa Fe";
} else if (area === 3) {
    localityFiltered = "Buenos Aires";
} else {
    localityFiltered = "Capital Federal";
}

const games = [
    {
        name: "Crash Bandicoot N. Sane Trilogy game Ps4 Fisico Sellado",
        price: 1060,
        quantitySold: 276,
        locality: "Capital Federal",
    },
    {
        name: "Lego Marvel Super Heroes",
        price: 700,
        quantitySold: 48,
        locality: "Capital Federal",
    },
    {
        name: "Gta V Ps4 Físico",
        price: 1449,
        quantitySold: 82,
        locality: "Santa Fe",
    },
    {
        name: "Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo",
        price: 1190,
        quantitySold: 348,
        locality: "Capital Federal",
    },
    {
        name: "Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado",
        price: 1250,
        quantitySold: 445,
        locality: "Buenos Aires",
    },
    {
        name: "Fifa 2017 game Físico Play 4 Nuevo!!!!!!",
        price: 890,
        quantitySold: 182,
        locality: "Capital Federal",
    },
    {
        name: "Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4",
        price: 950,
        quantitySold: 517,
        locality: "Capital Federal",
    },
    {
        name: "Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!",
        price: 940,
        quantitySold: 275,
        locality: "Capital Federal",
    },
    {
        name: "Need For Speed Ps4 Físico Nuevo Sellado Playstation",
        price: 790,
        quantitySold: 89,
        locality: "Capital Federal",
    },
    {
        name: "Lego Batman",
        price: 1000,
        quantitySold: 39,
        locality: "Capital Federal",
    },
    {
        name: "Fifa 17 Ps4 Original Fisico 2017",
        price: 1290,
        quantitySold: 310,
        locality: "Capital Federal",
    },
    {
        name: "Resident Evil 7 Ps4 Biohazard Físico",
        price: 1390,
        quantitySold: 154,
        locality: "Capital Federal",
    },
    {
        name: "Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick",
        price: 1390,
        quantitySold: 241,
        locality: "Capital Federal",
    }
];

// Se agrega funcion al objeto games de imprimir
games.forEach(game => {
    game.printOnScreen = function() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
    }
});

// Filtro segun lcoalidad
console.log(`\n Filtro segun localidad ${localityFiltered} \n`);
games
  .filter(game => game.locality === localityFiltered)
  .forEach(game => game.printOnScreen());

// Funcion para ordenar ascendente o descendente
const orderByPrice = (string) => {
    const orderWay = string.toUpperCase();
    let sortedGames = games.slice(); 

    if (orderWay === "ASC") {
        sortedGames.sort((a, b) => a.price - b.price);
    } else if (orderWay === "DESC") {
        sortedGames.sort((a, b) => b.price - a.price);
    } else {
        sortedGames = 0;
    }

    return sortedGames;
}

console.log("Juegos ordenados por precio ASCENDENTE:\n");
orderByPrice("ASC").forEach(game => game.printOnScreen());


console.log("Juegos ordenados por precio DESCENDENTE:\n");
orderByPrice("DESC").forEach(game => game.printOnScreen());


console.log("Juegos de Capital Federal ordenados por precio DESCENDENTE:\n");
orderByPrice('DESC')
    .filter(game => game.locality === "Capital Federal")
    .forEach(game => game.printOnScreen());