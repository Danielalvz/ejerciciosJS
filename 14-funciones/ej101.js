// Declarar una función que muestre los siguientes datos en consola:
// Tu Nombre
// Edad
// Teléfono
// Calle
// Altura
// Código postal
// Casado true/false

function showPersonalData(person) {
    console.log(`Nombre: ${person.name}`);
    console.log(`Edad: ${person.age}`);
    console.log(`Teléfono: ${person.phone}`);
    console.log(`Dirección: ${person.address}`);
    console.log(`Altura: ${person.height} cm`);
    console.log(`Codigo postal: ${person.postCode}`);
    console.log(`Casado: ${person.married}`);    
}

let person1 = {
    name: "Dani",
    age: 23,
    phone: "33333333333",
    address: "Calle Wallaci",
    height: "1.70",
    postCode: "54216",
    married: false
}

showPersonalData(person1);