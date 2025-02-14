const isEven = function(n) {
    return n % 2 === 0;
}

const numbers = [2, 5, 3, 24, 12];

numbers.forEach(number => {
    if(isEven(number)) {
        console.log(`${number} es par`);
    } else {
        console.log(`${number} no es par`);
    };
});

// console.log(isEven(2));
// console.log(isEven(5));
// console.log(isEven(3));
// console.log(isEven(24));
// console.log(isEven(12));


