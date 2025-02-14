let number = 0;
let sumOfEvenNumbers = 0;

for (let number = 0; number <= 1000; number++) {
    if(number % 2 !== 0) {
        sumOfEvenNumbers += number;
        console.log(`Suma parcial hasta ${number}: ${sumOfEvenNumbers}`)
    }
}

console.log(`La suma total es: ${sumOfEvenNumbers}`);
