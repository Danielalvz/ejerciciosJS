// Destructuring se conoce como la técnica para obtener valores de 
// un array o propiedades de un objeto de manera más fácil y 
// asignarlo a variables.

// Array destructuring
// Normalmente para asignar un valor de un array a una variable:
const animales = ["leon", "perro", "gato"];

const primerAnimal = animales[0];
const segundoAnimal = animales[1];

console.log(primerAnimal);
console.log(segundoAnimal);

// Por medio de destructuring podemos obtener el mismo resultado
const [primerAnimal1, segundoAnimal2] = animales;

console.log(primerAnimal1); //leon
console.log(segundoAnimal2); //perro

// utilizando [] al crear las variables y asignar el array podemos 
// obtener los valores y ponerle el nombre que mejor nos quede.

// Utilizando comas podemos saltear items del array y asignar valores
const [a, , c] = animales;

console.log(a); //leom
console.log(c); //gato

// Destructuring se combina bien con rest
// Podemos obtener los valores que necesitamos de un array y 
// nombrarlo con variables

// El resto de los valores los podemos poner en otra colección
const animales2 = ["leon", "perro", "gato"];
const [primer, ...otrosAnimales] = animales;

console.log(primer); //leon
console.log(otrosAnimales); //[ 'perro', 'gato' ]

// Destructuring en objetos

// Para asignar el valor de una propiedad de un objeto en una variable
const persona = { nombre: "Marta", edad: 35 };
const nombre = persona.nombre;
const edad = persona.edad;

console.log(nombre); // "Marta"
console.log(edad); // 35

// podemos obtener propiedades de un objeto y asignarlas a una variable
// Para extraer los valores correctamente, usa los nombres de propiedad 
// exactos
const persona2 = { nombre2: "Marta", edad2: 35 };
const { nombre2, edad2 } = persona2;

console.log(nombre2); // "Marta"
console.log(edad2); // 35

// Si deseas asignar un nombre diferente a las variables al desestructurar, 
// usa : para renombrarlas

// Para poder renombrar una propiedad podemos hacer propiedad: nuevoNombre
const persona3 = { nombre: "Marta", edad: 35 };
const { nombre: nombre3, edad: edad3 } = persona3;

console.log(nombre3); // ✅ "Marta"
console.log(edad3);   // ✅ 35

// Al igual que con Arrays podemos establecer valores por defecto si la 
// propiedad no existe

// Para asignar un valor por defecto utilizamos el operador = como si 
// asignaramos un valor a una variable.
const persona4 = { nombre: "Marta", edad: 35 };
const { nombre: name, edad: age, enPareja = true } = persona4;

console.log(name); // "Marta"
console.log(age); // 35
console.log(enPareja);

// También podemos utilizar rest con destructuring de objetos
const persona5 = { nombre: "Marta", edad: 35, enPareja: true };
const { nombre: nombre5, ...otrasPropiedades } = persona5;

console.log(nombre5); // "Marta"
console.log(otrasPropiedades); // { edad: 35, enPareja: true }

// Destructuring también funciona con objetos enlazados
const persona6 = {
    nombre: "Marta",
    edad: 35,
    enPareja: true,
    domicilio: { calle: "lala", altura: 1234 },
};

const {
    nombre: nombre6,
    domicilio: { calle, altura },
} = persona6;
  
console.log(nombre6); // "Marta"
console.log(calle); // lala
console.log(altura); // 1234