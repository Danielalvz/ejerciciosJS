const divide = (number1, number2) => {
    if(number2 === 0) {
        throw new Error("No se puede dividir por 0");
    }
    return number1 / number2;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
    console.log(divide(15, 3));
} catch (error) {
    console.log("El error es: ", error.message); 
}

console.log(divide(15, 3));
