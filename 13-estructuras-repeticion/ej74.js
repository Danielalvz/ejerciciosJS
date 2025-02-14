let number = 1;
let result = "";

while (number <= 15) {
    if (number % 2 !== 0) {
        result = "*".repeat(number);
        console.log(result);
    }
    number++;
}