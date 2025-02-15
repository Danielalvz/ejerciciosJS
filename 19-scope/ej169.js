function getFunction() {
    const name = "JavaScript";
  
    function showMessage() {
      console.log("Yo <3 " + name);
    }
  
    showMessage();
}
  
getFunction();

// Como parte del ejercicio escribe lo que pasa.

// La funcion se ejecuta porque la variables esta dentro del scope,
// es una constante global dentro de la funcion padre