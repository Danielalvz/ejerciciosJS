// Mostrar en consola los números pares del 0 al 1000 utilizando la estructura while

let number = 0;
let evenNumberList = [];

while(number <= 1000) {
    if(number % 2 === 0) {
        evenNumberList.push(number)
    }
    number++;
}

console.log(evenNumberList.join(", "));

