let number = 0;
let evenNumberList = [];

do {
    if (number % 2 === 0) {
        evenNumberList.push(number)
    }
    number++;
} while (number <= 1000);

console.log(evenNumberList.join(", "));

