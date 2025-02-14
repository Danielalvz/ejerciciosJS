const arithmetic = {
    addition: function(num1, num2) {
        if(typeof num1 === "number" && typeof num2 === "number") {
            console.log(num1 + num2); 
        }            
    },
    subtraction:function(num1, num2) {
        if(typeof num1 === "number" && typeof num2 === "number") {
            console.log(num1 - num2);
        }     
    },
    multiplication: function(num1, num2) {
        if(typeof num1 === "number" && typeof num2 === "number") {
            console.log(num1 * num2); 
        }
    },
    divide: function(num1, num2) {
        if(typeof num1 === "number" && typeof num2 === "number") {
            console.log(num1 / num2); 
        }  
    },
    showModule: function(num1, num2) {
        if(typeof num1 === "number" && typeof num2 === "number") {
            console.log(num1 % num2);
        }   
    }
}

arithmetic.addition(2, 10)
arithmetic.subtraction(10, 5)
arithmetic.multiplication(3, 100)
arithmetic.divide(40, 2)
arithmetic.showModule(20, 2)