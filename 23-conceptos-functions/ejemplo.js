// ARGUMENTS
// Podemos utizar este valor para consultar parámetros de manera dinámica.
function sumar() {
  let resultado = 0;
  for (let index = 0; index < arguments.length; index++) {
    resultado += arguments[index];
  }
  return resultado;
}

const resultado = sumar(10, 20, 30, 40);
console.log(resultado);


//Recursividad
//Una función puede llamarse a si mismo y esto se conoce como función 
// recursiva.
function mostrarNumeros(numero = 0) {
  console.log(numero);
  if (numero < 10) {
    mostrarNumeros(numero + 1);
  }
}

mostrarNumeros();

// Funciones anidadas
function mostrarMensajeSecreto(mensaje) {
    function mensajeSecreto(secreto) {
      return `${mensaje} secreto: ${secreto}`;
    }
  
    const nuevoMensaje = mensajeSecreto("Que bueno es JavaScript!");
  
    console.log(nuevoMensaje);
  }
  
  mostrarMensajeSecreto("Mostar este mensaje");

// Funciones que retornan funciones y closure
  function obtenerFuncionSumar() {
    const suma = function (numero1, numero2) {
      console.log(
        `Resultado de sumar ${numero1} + ${numero2} es ${numero1 + numero2}`
      );
    };
  
    return suma;
  }
  
// para llamar opcion 1:
  const mostrarSuma = obtenerFuncionSumar();
  
  mostrarSuma(10, 20);

// opcion 2:
  obtenerFuncionSumar()(10, 20);

//Higher Order Functions
// Se llama Higher order function a una función que al menos cumple 
// con alguna de estas dos condiciones;
// Recibe una función como parámetro (callback).
// Retorna una función.
  function map(coleccion = [], callback = () => {}) {
    for (let index = 0; index < coleccion.length; index++) {
      callback(coleccion[index]);
    }
  }
  
  const alumnos = ["Juan", "Marta", "Pepe", "Agustina", "Soledad"];
  const mostrarNombreDeAlumno = (alumno) => console.log(alumno);
  
  map(alumnos, mostrarNombreDeAlumno);

//  Ejemplo función que retorna una función:
function mostrarLinea(caracter, cantidad) {
  const texto = caracter.repeat(cantidad);
  console.log(texto);
}

function obtenerFuncionTemplate(caracter = "*") {
  return (texto) => {
    const cantidadMaximaCaracteres = texto.length + 4;

    mostrarLinea(caracter, cantidadMaximaCaracteres);
    console.log(`${caracter} ${texto} ${caracter}`);
    mostrarLinea(caracter, cantidadMaximaCaracteres);
  };
}

obtenerFuncionTemplate("=")("Dani");

//IIFE
//IIFE se le llama al autoejecutar una función ni bien fué definida.
// El concepto es simple, declarar una función entre paréntesis y 
// luego ejecutarla.
(function () {
    console.log("Esta funcion se ejectuto");
  })();

(function (mensaje) {
    console.log(mensaje);
  })("Esta funcion se ejectuto");