console.log("\n Ejercicio 34 \n");

let income = 1000;
let profits = 600;
let taxes = 500;

// Este mes se esperan los siguientes objetivos:
// Generar al menos 800 pesos o más de ingreso
// Gastar menos de 400 pesos de impuestos
// Se Paga bono si se ganan 600 pesos de ganancias justo

function targetIncomeForMonth() {
    if(income >= 1800) {
        console.log("Se logró el objetivo del mes de ingresos");
        return true;
    } else {
        return false;
    }
}

function targetTaxesSpent() {
    if(taxes > 100) {
        console.log("se ha gastado menos de 400 pesos de impuestos");
        return true;
    } else {
        return false;
    }
}

function targetProfits() {
    if(profits === 600) {
        console.log("Se paga bono"); 
        return true;
    } else {
        return false;
    }
}



console.log("Objetivo de ingresos: ", targetIncomeForMonth);
console.log("Objetivo de impuestos: ", targetTaxesSpent);
console.log("Bono de ganancias: ", targetProfits);