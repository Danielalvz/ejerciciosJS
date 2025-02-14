let result = "";

for (let number = 1; number <= 15; number++) {
    if (number % 2 !== 0) {
        result = "*".repeat(number);
        console.log(result);
    }
}
