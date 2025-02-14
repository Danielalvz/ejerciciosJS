let numbers = [];

for (let i = 0; i <= 1000; i++) {
    if(i % 10 === 0) {
        numbers.push(i);
        console.log(i);
    }   
}

console.log(numbers.join(", "));
