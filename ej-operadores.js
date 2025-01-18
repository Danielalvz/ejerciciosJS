//Ejercicios 27 a 33
console.log("\n Ejercicios 27 a 32 \n");
//Operaciones matemáticas de dos numeros
console.log("\n Ejercicios 27\n");


let number1 = 1;
let number2 = 2;

let messajeAddition = `sumo ${number1} + ${number2} y el resultado es (${number1 + number2}  (donde ${number1} y ${number2} son los valores de las variables y ${number1 + number2} es el resultado de la operación)`;
let messajeSubtraction = `resto ${number1} - ${number2} y el resultado es (${number1 - number2}  (donde ${number1} y ${number2} son los valores de las variables y ${number1 - number2} es el resultado de la operación)`;
let messajeMultiplication = `multiplico ${number1} * ${number2} y el resultado es (${number1 * number2}  (donde ${number1} y ${number2} son los valores de las variables y ${number1 * number2} es el resultado de la operación)`;
let messajDivision = `divido ${number1} / ${number2} y el resultado es (${number1 / number2}  (donde ${number1} y ${number2} son los valores de las variables y ${number1 / number2} es el resultado de la operación)`;
let messajeRemainder = `el residuio ${number1} % ${number2} y el resultado es (${number1 % number2}  (donde ${number1} y ${number2} son los valores de las variables y ${number1 % number2} es el resultado de la operación)`;

console.log("Suma:",messajeAddition);
console.log("Resta:",messajeSubtraction);
console.log("Multiplicación:",messajeMultiplication);
console.log("División:",messajDivision);
console.log("Resto:",messajeRemainder);

console.log("\n Ejercicio 28 \n");
//Tabla del 9

const number = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

console.log("\n Ejercicio 29 \n");
//Calcular y mostrar en consola el perímetro de un cuadrado 
//(el perímetro es simplemente cuatro veces la longitud del lado)

const sideLength = 10;
console.log(`El perimetro de un cuadrado de lado ${sideLength} es ${sideLength * 4}`);

console.log("\n Ejercicio 30 \n");
//Calcular y mostrar en consola el área de un cuadrado (lado al cuadrado)

const sideOfSquare = 5;

console.log(`El área de un cuadrado de lado ${sideOfSquare} es ${sideOfSquare * sideOfSquare}`);

console.log("\n Ejercicio 31 \n");
//Calcular y mostrar en consola el perímetro de un triangulo (sumar los lados)

const sideOfTriangle1 = 10;
const sideOfTriangle2 = 20;
const sideOfTriangle3 = 5;

console.log(`El perimetro de un triangulo de lado ${sideOfTriangle1}, ${sideOfTriangle2} y ${sideOfTriangle3} es ${sideOfTriangle1 + sideOfTriangle2 + sideOfTriangle3}`);

console.log("\n Ejercicio 32 \n");
//Area y perimetro de rectangulo

const height = 10;
const base = 4;
let rectanglePerimeter = (height * 2) + (base * 2)
let rectangleArea = height * base;

console.log(`El perimetro de un rectangulo de altura ${height}, y de base ${base} es ${rectanglePerimeter}`);
console.log(`El área de un rectangulo de altura ${height}, y de base ${base} es ${rectangleArea}`);

console.log("\n Ejercicio 33 \n");
let numberOfUsers = 100;

numberOfUsers += 5;
console.log(`Cantidad de usuarios: ${numberOfUsers}`);

numberOfUsers -= 3;
console.log(`Cantidad de usuarios: ${numberOfUsers}`);

numberOfUsers *= 2;
console.log(`Cantidad de usuarios: ${numberOfUsers}`);

numberOfUsers /= 2;
console.log(`Cantidad de usuarios: ${numberOfUsers}`);









