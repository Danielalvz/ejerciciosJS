const numberDay = 5;
let nameDay = null;

switch (numberDay) {
    case 1:
        nameDay = "Monday";
        break;
    case 2:
        nameDay = "Tuesday";
        break;
    case 3:
        nameDay = "Wednesday";
        break;
    case 4:
        nameDay = "Thursday";
        break;
    case 5:
        nameDay = "Friday";
        break;
    case 6:
        nameDay = "Saturday";
        break;
    case 7:
        nameDay = "Sunday";
        break;
    default:
        nameDay = "Por favor seleccionar un número de 1 a 7"
        break; 
}

console.log(`El día seleccionado es ${nameDay}`);