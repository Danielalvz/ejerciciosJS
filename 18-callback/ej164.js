const numbers = [1, 5, 3, 8, 2, 10];

function forEach(collection, functionName) {
    functionName(collection);
}

const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);  
    }
}

forEach(numbers, printNumbers);

// Otra forma de ejemplo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forEach2(coleccion, callback) {
    for (let i = 0; i < coleccion.length; i++) {
        callback(coleccion[i], i, coleccion); 
    }
}

forEach2(numeros, function(valor) {
    console.log(valor);
});