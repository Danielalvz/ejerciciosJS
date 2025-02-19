// setTimeout / clearTimeout

// Esta función se utiliza cuando queremos que nuestro código se ejecute 
// una sola vez en un tiempo establecido

// 1. Acepta como primer parámetro la función que queremos que se ejecute
// 2. El segundo parámetro acepta un valor numérico con la cantidad de 
// milisegundos que queremos esperar para ejecutar la función pasada 
// como primer parámetro

const saludar = function () {
    console.log("hola");
  };
  
  setTimeout(saludar, 5000);

// pasado como funcion anonima
setTimeout(function () {
    console.log("hola2");
  }, 5000);

// Podemos cortar la ejecución de este setTimeout utilizando la función 
// clearTimeout.
// Esta función espera un valor numérico como parámetro

// Esta función retorna un valor numérico que es el ID

var idTimeOut = setTimeout(function () {
    console.log("hola3");
  }, 5000);
  
  // Cortamos la ejecución
  clearTimeout(idTimeOut);

  // En algunos casos podemos necesitar tener que pasarle parámetros a 
  // la función que se va a ejecutar
  // Esta función acepta todos los parámetros que queremos de la segunda 
  // posición en adelante y los pasa como parámetros de la función que 
  // se ejecuta.

  const saludar2 = function (nombre, apodo) {
    console.log(`hola ${nombre} ${apodo}`);
  };
  
  setTimeout(saludar2, 5000, "Marta", "Martita");