let number = 0;
let sumResult = 0;

do {
    sumResult += number;
    console.log(`Suma parcial hasta ${number}: ${sumResult}`)
    number++;
} while (number <= 1000);

console.log(`La suma total es: ${sumResult}`);
