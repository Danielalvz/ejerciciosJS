const numberOfMonth = 7;

let nameOfMonth = null;
let numberOfDays = null;

switch (numberOfMonth) {
    case 1:
      nameOfMonth = "Enero";
      numberOfDays = 31;
      break;
    case 2:
      nameOfMonth = "Febrero";
      numberOfDays = "28/29";
      break;
    case 3:
      nameOfMonth = "Marzo";
      numberOfDays = 31;
      break;
    case 4:
      nameOfMonth = "Abril";
      numberOfDays = 30;
      break;
    case 5:
      nameOfMonth = "Mayo";
      numberOfDays = 31;
      break;
    case 6:
      nameOfMonth = "Junio";
      numberOfDays = 30;
      break;
    case 7:
      nameOfMonth = "Julio";
      numberOfDays = 31;
      break;
    case 8:
      nameOfMonth = "Agosto";
      numberOfDays = 31;
      break;
    case 9:
      nameOfMonth = "Septiembre";
      numberOfDays = 30;
      break;
    case 10:
      nameOfMonth = "Octubre";
      numberOfDays = 31;
      break;
    case 11:
      nameOfMonth = "Noviembre";
      numberOfDays = 30;
      break;
    case 12:
      nameOfMonth = "Diciembre";
      numberOfDays = 31;
      break;
    default:
      nameOfMonth = null;
      numberOfDays = null;
      break;
  }
  
  if (nameOfMonth === null && numberOfDays === null) {
    console.log("Error: Ingrese un número entre 1 y 12");
  } else {
    console.log(`El mes seleccionado es ${nameOfMonth} y tiene ${numberOfDays} días`);
  }