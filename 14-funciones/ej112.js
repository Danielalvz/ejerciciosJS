const showNumbers = function(start, end) {
    if(typeof start !== "number" || typeof end !== "number") {
        console.log("Error, debe ingresar números");    
        return; 
    }

    if(start === end) {
        console.log("Los números son iguales");
        return;       
    }

    if(start > end) {
        //Ascendenre
        for(let i = end; i <= start; i++) {
            console.log(i);   
        }
    } else {
        for(let i = end; i >= start; i--) {
            console.log(i);    
        }
    }
}

showNumbers(0,10);
showNumbers(10,2);
showNumbers(0, 1000);
showNumbers(1000, 0);
showNumbers(100, 100);
showNumbers("100", 300);
