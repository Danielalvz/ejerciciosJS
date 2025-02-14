const evenNumbers = function () {
    for (let i = 0; i <= 100; i++) {
        if(i % 2 === 0) {
            console.log(i);          
        }
    }
}

for (let i = 0; i < 5; i++) {
    evenNumbers();
}