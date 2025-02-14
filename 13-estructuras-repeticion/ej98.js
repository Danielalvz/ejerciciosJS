let result = 0;

for (let i = 0; i <= 1000; i++) {
    result += i;   
    if(result > 100) {
        break;
    }
    console.log(result);
}

console.log("Resultado final:", result);