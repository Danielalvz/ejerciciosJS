const iceCreamTastes = [];

iceCreamTastes.push("Arequipe");
iceCreamTastes.push("Mandarina");
iceCreamTastes.push("Cheesecake");
iceCreamTastes.push("Maracuya");
iceCreamTastes.push("Yogurt");
iceCreamTastes.push("Limon");
iceCreamTastes.push("Brownie");
iceCreamTastes.push("Frutos rojos");
iceCreamTastes.push("Masmelo");
iceCreamTastes.push("Chicle");

console.log("\n Inicio a fin \n");

iceCreamTastes.forEach(taste => {
    console.log(taste);
});

console.log("\n Fin a inicio: \n");

iceCreamTastes.reverse().forEach(taste => {
    console.log(taste);
});