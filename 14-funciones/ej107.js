const largestNumber = function(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        console.log("Esta función espera valores del tipo number");
        return;
    }
    
    if(number1 > number2) {
        console.log(`El número ${number1} es más grande que ${number2}`);
    } else if(number2 > number1) {
        console.log(`El número ${number2} es más grande que ${number1}`); 
    } else  {
        console.log(`Los dos números son ${number1}`);
    }  
}

largestNumber(5, 4);
largestNumber(5, 40);
largestNumber("5", 4);
largestNumber("5", "4a");


