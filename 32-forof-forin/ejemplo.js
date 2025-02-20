// For of

// Se usa para iterar iterables como pueden ser los arrays, strings, 
// maps, sets

// En cada iteración se obtiene un item del iterable
for (const item of iterable) {
    // Código a ejecutar por cada item
}

const animales = ["perro", "gato", "elefante"];

for (const animal of animales) {
    console.log(animal);
}

const texto = "Nicolas";

for (const letra of texto) {
    console.log(letra);
}

// For in

// Se utiliza para iterar por las propiedades de un objeto
// Podemos decir que es algo parecido a usar Object.keys() y después 
// iterarlo.

// A DIFERENCIA de for of, este iterador devuelve la KEY o propiedad 
// del objeto iterado

for (const key in object) {
    // Código a ejecutar
}

const usuario = {
    name: "Nicolas",
    age: 45,
    city: "Toronto",
};

for (const key in usuario) {
    console.log(`${key}: ${usuario[key]}`);
}