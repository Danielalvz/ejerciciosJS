//Ejercicios variables 1 al 9
console.log("\n Ejercicios variables 1 al 9 \n");

let name = null;
let lastName = null;
let age = 0;
let dateOfBirth = null;
let address = null;

name = "Dani";
lastName = "Lozano";
age = 27;
dateOfBirth = "10/03/1997";
address = "Calle Wallaci";

console.log(`Nombre: ${name} ${lastName} `);
console.log(`Edad: ${age} `);
console.log(`Fecha de nacimiento: ${dateOfBirth} `);
console.log(`Dirección: ${address} `);


//Ejercicio 20 y 21, tipo Number
console.log("\n Ejercicio 20 y 21, tipo Number \n");

const day = 15;
const month = 1;
const year = 2025;

console.log(`${day}/${month}/${year}`);

const phone = "33333333333";
const street = "Wallaci";
const streetHeight = 2;

console.log(`
    Tengo ${age} años
    Mi teléfono es ${phone}
    Vivo en la calle ${streetHeight}`);

//Ejercicio 22, Boolean
console.log("\n Ejercicio 22, Boolean \n");

const exit = true;
const married = false;
const registeredUser = false;
const iLikeJs = true;

console.log("Salir:", exit);
console.log("Casado:", married);
console.log("Usuario registrado:", false);
console.log("Me gusta JS:", iLikeJs);

//Ejercicio 23, Undefined
console.log("\n Ejercicio 23, Undefined \n");

let nameUndefined;
console.log("Nombre:", nameUndefined);

//Ejercicio 25 y 26, typeof
console.log("\n Ejercicio 25 y 26, typeof \n");

const heroName = "Batman";
const actor = "Bruce Wayne";
const heroFlies = false;
const heroDrives = true;
const life = 15;
let job = undefined;
const freeTime = null;

console.log(`Nombre super heroe: ${heroName}`);
console.log(`Nombre actor: ${actor}`);
console.log(`Vuela: ${heroFlies}`);
console.log(`Maneja: ${heroDrives}`);
console.log(`Vida: ${life}`);
console.log(`Trabajo: ${job}`);
console.log(`Tiempo libre: ${freeTime}`);

console.log("\n Tipo de vairables \n");


console.log(`Nombre super heroe: ${typeof heroName}`);
console.log(`Nombre actor: ${typeof actor}`);
console.log(`Vuela: ${typeof heroFlies}`);
console.log(`Maneja: ${typeof heroDrives}`);
console.log(`Vida: ${typeof life}`);
console.log(`Trabajo: ${typeof job}`);
console.log(`Tiempo libre: ${typeof freeTime}`);

// 26
console.log("\n Curso \n");

const course = "React native";
const classroomNumber = 3;
const numberOfStudents = 20;
const descriptionOfCourse = "practical learning from scratch using react native";
const teacher = "Nicolas";
const startTime = "18:00"
const endTime = "20:30"

console.log("Curso:", course);
console.log("Número de aula:", classroomNumber);
console.log("Número de estudiantes:", numberOfStudents);
console.log("Descripción:", descriptionOfCourse);
console.log("Profesor:", teacher);
console.log("El curso es de:", startTime, "a ", endTime);

console.log("\n Tipo variables \n");

console.log("Curso:", typeof course);
console.log("Número de aula:", typeof classroomNumber);
console.log("Número de estudiantes:", typeof numberOfStudents);
console.log("Descripción:", typeof descriptionOfCourse);
console.log("Profesor:", typeof teacher);
console.log("Hora inicio:", typeof startTime, ", hora final: ", typeof endTime);




// -----------------------------------------------------------------

//Tipo de variables typeof, ejemplo
console.log("\n Ejemplos typeof \n");

const nombre = "Nicolas";
const edad = 45;
const casado = true;
const juegaFutbol = undefined;
const nulo = null;

console. log(typeof nombre); // "string"
console. log(typeof edad); // "number"
console. log(typeof casado); // "boolean"
console. log(typeof juegaFutbol); // "undefined"
console. log(typeof nulo); // "object"