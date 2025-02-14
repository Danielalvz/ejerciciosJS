const games = [
    {
      name: "Crash Bandicoot N. Sane Trilogy game Ps4 Fisico Sellado",
      price: 1060,
      quantitySold: 276,
      locality: "Capital Federal",
      printOnScreen: function() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Lego Marvel Super Heroes",
      price: 700,
      quantitySold: 48,
      locality: "Capital Federal",
      printOnScreen: function() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Gta V Ps4 Físico",
      price: 1449,
      quantitySold: 82,
      locality: "Santa Fe",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo",
      price: 1190,
      quantitySold: 348,
      locality: "Capital Federal",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado",
      price: 1250,
      quantitySold: 445,
      locality: "Buenos Aires",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Fifa 2017 game Físico Play 4 Nuevo!!!!!!",
      price: 890,
      quantitySold: 182,
      locality: "Capital Federal",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4",
      price: 950,
      quantitySold: 517,
      locality: "Capital Federal",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!",
      price: 940,
      quantitySold: 275,
      locality: "Capital Federal",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Need For Speed Ps4 Físico Nuevo Sellado Playstation",
      price: 790,
      quantitySold: 89,
      locality: "Capital Federal",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Lego Batman",
      price: 1000,
      quantitySold: 39,
      locality: "Capital Federal",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Fifa 17 Ps4 Original Fisico 2017",
      price: 1290,
      quantitySold: 310,
      locality: "Capital Federal",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Resident Evil 7 Ps4 Biohazard Físico",
      price: 1390,
      quantitySold: 154,
      locality: "Capital Federal",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    },
    {
      name: "Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick",
      price: 1390,
      quantitySold: 241,
      locality: "Capital Federal",
      printOnScreen() {
        console.log(`${this.name}\n$ ${this.price.toString()}\n${this.quantitySold} vendidos\n${this.locality}\n`);
      }
    }
  ];
  
  games.forEach(game => game.printOnScreen());