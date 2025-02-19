// setInterval / clearInterval

// nos permite ejecutar una función múltiples veces cada una 
// cantidad establecida de tiempo

// Es similar a setTimeout con la diferencia que se ejecuta múltiples veces
// Retorna un valor numérico que se utiliza como ID

const saludar = function () {
    console.log("hola");
  };
  
  const id = setInterval(saludar, 1000);

// Podemos utilizar la función clearInterval para anular el llamado de 
// setInterval

const saludar2 = function () {
    console.log("hi");
  };
  
  const id2 = setInterval(saludar2, 1000);
  
  // se corta la ejecución
  clearInterval(id2);

// También podemos pasarle parámetros de la misma forma que a setTimeout

const saludar3 = function (nombre, apodo) {
    console.log(`hola ${nombre} ${apodo}`);
  };
  
  setInterval(saludar3, 1000, "Marta", "Martita");