let sumResult = 0;

for (let number = 0; number <= 1000; number++) {
    sumResult += number;
    console.log(`Suma parcial hasta ${number}: ${sumResult}`);
}

console.log(`La suma total es: ${sumResult}`);