// Analiza los siguientes casos y escribe cuál crees que es el resultado 
// final en un comentario.

console.log(numero1);
var numero1 = 10;

// var tendria como resulatdo undefined, ya que js reserva un espacio
// en memoria y la asigna como undefined, solo en el caso de var

// Esto sucede ya que el motor de JavaScript va a asignar un valor de 
// undefined y declarar la variable primero y por eso la 
// puede utilizar aún si la llamamos antes de su declaración

saludar();

function saludar() {
  console.log("Hola Mundo!");
}

// las funciones declaradas con function son elevadas completamente, 
// por lo que pueden ejecutarse antes de su declaración sin errores
// se ejecuta

console.log(numero2);
let numero2 = 20;

// No se ejecuta
// las variables declaradas con let y const también son elevadas al inicio, 
// pero no inicializadas, hasta que se llega a la línea donde están definidas

// se obtiene ERROR
// Si intentas acceder a ellas antes de que se inicialicen, 
// obtendrás un error.

function prueba() {
    console.log(numero3);
    var numero3 = 5;
    console.log(numero3);
  }
  
  prueba();

// numero3 es declarada con var, por lo que se eleva al inicio de 
// la función pero sin su valor
// console.log(numero3) se ejecuta antes de la asignación, 
// por lo que imprime undefined.
// Luego, numero3 = 5 y el siguiente console.log(numero3) imprime 5

saludar();

var saludar = function () {
  console.log("Hola Mundo!");
};

// La variable saludar es declarada con var y elevada, 
// pero sin valor (undefined).
// Cuando saludar(); intenta ejecutarse, saludar es undefined y no se 
// puede llamar como función

{
    console.log(numero4);
    let numero4 = 15;
  }

// numero4 está declarada con let, lo que la coloca en la zona temporal 
// muerta (TDZ) dentro del bloque {}.
// Intentar acceder a numero4 antes de su declaración genera un
// ReferenceError