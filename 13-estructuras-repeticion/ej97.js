let numbers = [];

for (let i = 10000; i >= 0; i--) {
    if(i % 10 === 0) {
        numbers.push(i);
        console.log(i);
    }   
}

console.log(numbers.join(", "));
