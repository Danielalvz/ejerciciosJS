function calculateAverage(...numbers) {
    // Si no hay números, devolver 0
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((acumulador, num) => acumulador + num, 0);

    return sum / numbers.length;
}

console.log(calculateAverage(10, 20, 30));
console.log(calculateAverage(5, 15, 25, 35, 45));
console.log(calculateAverage(100, 200));
console.log(calculateAverage()); 