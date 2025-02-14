// Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 utilizando la estructura while.

let number = 0;
let sumOfEvenNumbers = 0;

while(number <= 1000) {
    if(number % 2 !== 0) {
        sumOfEvenNumbers += number;
        console.log(`Suma parcial hasta ${number}: ${sumOfEvenNumbers}`)
    }
    number++;
}

console.log(`La suma total es: ${sumOfEvenNumbers}`);
