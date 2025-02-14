const numbers = [];

for (let index = 0; index <= 1000; index++) {
    numbers.push(index)
}

const incrementedArray = numbers.map(number => number + 10);

console.log(incrementedArray);

for (let index = 0; index < 10; index++) {
    console.log(`Indice ${index}, original: ${numbers[index]}, incrementado: ${incrementedArray[index]}`);
    
}


