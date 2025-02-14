let number = 1;
let result = "";

do {
    if (number % 2 !== 0) {
        result = "*".repeat(number);
        console.log(result);
    }
    number++;
} while (number <= 15);