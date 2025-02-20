// Módulos

// Dado el tamaño del código y la complejidad del código es que se 
// recomienda utilizar el concepto de módulos.
// es un archivo donde ponemos parte del código que luego podemos utilizar
//  desde otros módulos o archivos.

// El módulo debe exportar el codigo que va a ser utilizado en otros lados
// Los otros archivos o módulos deben importar el codigo del módulo que 
// necesitan utilizar

// Por ejemplo podemos tener un módulo de funciones tipo utilitarios y 
// poner en ese archivo todo el codigo relacionado

// Para exportar algo de un módulo en JavaScript se utiliza la palabra 
// reservada export
// Para importar algo de otro módulo se utiliza la palabra reservada import

// Necesitamos 2 archivos, uno para el módulo (utils.js) y otro para llamar 
// o utilizar el módulo(usandoutils.js)

// En el archivo utils.js declaramos y exportamos la siguiente función:
export function acortarPalabra(palabra, cantidadDeCaracteres, simbolo = ".") {
    if (palabra.length > cantidadDeCaracteres) {
      const palabraAcortada = palabra
        .slice(0, cantidadDeCaracteres)
        .concat(simbolo.repeat(3));
      return palabraAcortada;
    }
  
    return palabra;
  }
  
// En usandoutils.js importamos la función del módulo utils de la siguiente manera:
import { acortarPalabra } from "./utils.js";

const nombre = "Nicolas";
const palabraAcortada = acortarPalabra(nombre, 4);
const palabraAcortada2 = acortarPalabra("AGUANTE JAVASCRIPT!!!!", 18);

console.log(palabraAcortada);
console.log(palabraAcortada2);

// Este tipo de import se llama Named import ya que utilizamos el 
// mismo nombre que tiene la función en el lugar donde fue declarado

// También podemos importar variables siguiendo la misma estructura tanto 
// en el módulo como en el archivo que utiliza al mismo
// utils.js
export const SIMBOLO = ".";

export function acortarPalabra(
  palabra,
  cantidadDeCaracteres,
  simbolo = SIMBOLO
) {
  if (palabra.length > cantidadDeCaracteres) {
    const palabraAcortada = palabra
      .slice(0, cantidadDeCaracteres)
      .concat(simbolo.repeat(3));
    return palabraAcortada;
  }

  return palabra;
}

// usandoutils.js
import { acortarPalabra, SIMBOLO } from "./utils.js";

const nombre2 = "Nicolas";
const palabraAcortada3 = acortarPalabra(nombre2, 4);
const palabraAcortada4 = acortarPalabra("AGUANTE JAVASCRIPT!!!!", 18, "<3");

console.log(palabraAcortada3);
console.log(palabraAcortada4);

console.log(`El símbolo utilizado por default es: ${SIMBOLO}`);

// Vemos que siempre utilizamos el mísmo nombre con el que fueron 
// declarados los exports.
// En caso de necesitarlo o querer también podemos renombrar los valores 
// donde los utilizamos.
// utils.js
export const SIMBOLO2 = ".";

export function acortarPalabra(
  palabra,
  cantidadDeCaracteres,
  simbolo = SIMBOLO2
) {
  if (palabra.length > cantidadDeCaracteres) {
    const palabraAcortada = palabra
      .slice(0, cantidadDeCaracteres)
      .concat(simbolo.repeat(3));
    return palabraAcortada;
  }

  return palabra;
}

// usandoutils.js
import { acortarPalabra, SIMBOLO2 as elSimbolo } from "./utils.js";

const nombre3 = "Nicolas";
const palabraAcortada5 = acortarPalabra(nombre3, 4);
const palabraAcortada6 = acortarPalabra("AGUANTE JAVASCRIPT!!!!", 18, "<3");

console.log(palabraAcortada5);
console.log(palabraAcortada6);

console.log(`El símbolo utilizado por default es: ${elSimbolo}`);

// Utilizamos la palabra reservada as para establecer que SIMBOLO ahora es elSimbolo

// Otra opción es importar todo junto utilizando * y un nombre para el import
import * as Utils from "./utils.js";

const { acortarPalabra, SIMBOLO } = Utils;
const nombre4 = "Nicolas";
const palabraAcortada7 = acortarPalabra(nombre4, 4);
const palabraAcortada8 = acortarPalabra("AGUANTE JAVASCRIPT!!!!", 18, "<3");

console.log(palabraAcortada7);
console.log(palabraAcortada8);

console.log(`El símbolo utilizado por default es: ${SIMBOLO}`); 

// Por medio de * establecemos que queremos importar todo lo que exporta 
// el módulo y con as Utils le definimos un nombre para utilizarlo.
// En este ejemplo usamos destructuring para obtener la función y 
// variable que queremos utilizar pero también podríamos usar 
// Utils.acortarPalabra y Utils.SIMBOLO ya que lo importado es un objeto.

// Los módulos también pueden exportar valores por default.

// Esto significa que establecemos sólo un valor por archivo donde 
// establecemos todo lo que queremos exportar
const SIMBOLO3 = ".";

function acortarPalabra(palabra, cantidadDeCaracteres, simbolo = SIMBOLO3) {
  if (palabra.length > cantidadDeCaracteres) {
    const palabraAcortada = palabra
      .slice(0, cantidadDeCaracteres)
      .concat(simbolo.repeat(3));
    return palabraAcortada;
  }

  return palabra;
}

export default {
  acortarPalabra,
  simbolo: SIMBOLO3,
};

// En este caso exportamos la función acortarPalabra y definimos un 
// nombre en minúscula para SIMBOLO

// Dado que utilizamos default export sólo podemos utilizar un 
// export default por módulos

// Al utilizar default export no podemos utilizar named imports ya que 
// sólo exporta un objeto y esta en nosotros definir el nuevo nombre de 
// import
import Utils from "./utils.js";

const { acortarPalabra, simbolo } = Utils;
const nombre5 = "Nicolas";
const palabraAcortada9 = acortarPalabra(nombre5, 4);
const palabraAcortada10 = acortarPalabra("AGUANTE JAVASCRIPT!!!!", 18, "<3");

console.log(palabraAcortada9);
console.log(palabraAcortada10);

console.log(`El símbolo utilizado por default es: ${simbolo}`);

// En este caso import Utils from "./utils.js"; importa lo exportado por 
// default en el módulo que es un objeto que tiene 2 propiedades, 
// acortarPalabra y simbolo.