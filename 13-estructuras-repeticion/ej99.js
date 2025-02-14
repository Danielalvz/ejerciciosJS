let result = 0;
let evenCount = 0;

for (let i = 0; i <= 1000; i++) {
    if(i % 2 === 0) {
        result += i;
        evenCount++;
    }
    
    if(evenCount === 10) {
        break;
    }
    console.log(result);
}

console.log("La suma de los primeros 10 números pares es:", result);