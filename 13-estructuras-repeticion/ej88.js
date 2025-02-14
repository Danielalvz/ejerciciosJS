
let evenNumberList = [];

for (let number = 0; number <= 1000; number++) {
    if(number % 2 === 0) {
        evenNumberList.push(number)
    }
}

console.log(evenNumberList.join(", "));

