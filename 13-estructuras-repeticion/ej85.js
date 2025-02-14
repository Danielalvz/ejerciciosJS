let i = 0;
let number1 = 0;
let number2 = 1;
let result = 0;

do {
    console.log(number1);

    result = number1 + number2;
    number1 = number2;
    number2 = result;
    i++;
} while (i <= 10);
