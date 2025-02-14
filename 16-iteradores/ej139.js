const numbers = [];

for (let index = 1; index <= 100; index++) {
    numbers.push(index);
}

console.log(numbers);

// Crear un nuevo array filtando los números pares
const evenNumbers = numbers.filter(number => number % 2 === 0);

// Crear un nuevo array filtando los números impares
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log("Numeros pares: ", evenNumbers);
console.log("Numeros impares: ", oddNumbers);

// Mostrar en consola sólo los últimos 10 números pares e impares
console.log("Últimos 10 números pares:", evenNumbers.slice(-10));
console.log("Últimos 10 números impares:", oddNumbers.slice(-10));



