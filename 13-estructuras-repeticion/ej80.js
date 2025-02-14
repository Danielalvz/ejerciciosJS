let number = 0;
let sumOfEvenNumbers = 0;

do {
    if (number % 2 !== 0) {
        sumOfEvenNumbers += number;
        console.log(`Suma parcial hasta ${number}: ${sumOfEvenNumbers}`)
    }
    number++;
} while (number <= 1000);

console.log(`La suma total es: ${sumOfEvenNumbers}`);
