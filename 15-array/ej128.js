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

const arequipe = iceCreamTastes.pop();
const mandarina = iceCreamTastes.pop()

const voidStock = [arequipe, mandarina];

console.log("Lista de gustos disponibles:", iceCreamTastes);
console.log("Lista de gustos sin stock:", voidStock);