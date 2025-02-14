// Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 utilizando la estructura while.

let number = 0;
let sumResult = 0;

while(number <= 1000) {
    sumResult += number;
    console.log(`Suma parcial hasta ${number}: ${sumResult}`)
    number++;
}

console.log(`La suma total es: ${sumResult}`);
