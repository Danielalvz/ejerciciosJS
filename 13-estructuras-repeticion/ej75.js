// Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
let i = 0;
let number1 = 0;
let number2 = 1;
let result = 0;

while(i <= 10) {
    console.log(number1);

    result = number1 + number2;
    number1 = number2;
    number2 = result;
    i++;
}
