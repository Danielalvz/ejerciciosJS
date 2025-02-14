const iceCreamTastes = [];

const addIceCreamTaste = (list, taste) => {
    list.unshift(taste);
    return list;
}

addIceCreamTaste(iceCreamTastes, "Arequipe");
addIceCreamTaste(iceCreamTastes, "Mandarina");
addIceCreamTaste(iceCreamTastes, "Cheesecake");
addIceCreamTaste(iceCreamTastes, "Maracuya");
addIceCreamTaste(iceCreamTastes, "Yogurt");
addIceCreamTaste(iceCreamTastes, "Limon");
addIceCreamTaste(iceCreamTastes, "Brownie");
addIceCreamTaste(iceCreamTastes, "Frutos rojos");
addIceCreamTaste(iceCreamTastes, "Masmelo");
addIceCreamTaste(iceCreamTastes, "Chicle");

const chicle = iceCreamTastes.shift();
const masmelo = iceCreamTastes.shift()

const voidStock = [chicle, masmelo];

console.log("Lista de gustos disponibles:", iceCreamTastes);
console.log("Lista de gustos sin stock:", voidStock);


