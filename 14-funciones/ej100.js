// Declarar una función que muestre en consola los números pares del 0 al 100

function showEvenNumbers() {
    for (let i = 0; i <= 1000; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

showEvenNumbers();