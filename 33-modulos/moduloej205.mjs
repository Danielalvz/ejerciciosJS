
export const start = 0;
export const end = 100;

export const showNumbers = function(start, end) {
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


