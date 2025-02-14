const fibonacci = function (n) {
    let number1 = 0;
    let number2 = 1;
    let result = 0;

    for (let i = 0; i <= n; i++) {
        console.log(number1);

        result = number1 + number2;
        number1 = number2;
        number2 = result;
    }
}

for (let i = 0; i < 3; i++) {
    fibonacci(10);
}