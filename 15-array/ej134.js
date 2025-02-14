const numbers = [];
let i = 0;

//Ingresar números de 0 a 10000
while (i <= 10000) {
    numbers.push(i)
    i++;
}

console.log(numbers);

const resultAddNumbers = numbers.reduce((acc, num) => {
    const partialSum = acc + num;

    console.log("Suma parcial: ", partialSum);
    return partialSum;
}, 0);

console.log("Resultado suma final:", resultAddNumbers);

if (resultAddNumbers === 50005000) {
    console.log("El ejercicio es correcto");
} else {
    console.log("Verificar el ejercicio para obtener el resultado esperado!!! ");
}

