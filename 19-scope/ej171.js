function showValue() {
    console.log(value);
    let value = 5;
  }

showValue();

// Como parte del ejercicio escribe lo que pasa.

// No se ejecuta porque la variable value es creada despues de ser llamada

// Hoisting (elevación): JavaScript "mueve" la declaración let value; 
// al inicio de la función

//No inicialización: A diferencia de var, las variables con let no se 
// inicializan automáticamente con undefined