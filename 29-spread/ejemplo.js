// Spread

// spread lo podemos ver como la inversa de rest.
// En lugar de combinar valores en un array u objeto 
// lo que va a hacer es expandir el contenido de un array u objeto

// La forma de escribir spread es de la misma forma que rest 
// ...array u ...objeto

// Spread necesita que sea utilizado en un iterable por lo cual 
// lo podemos utilizar dentro de un array, de un objeto o una función.

const animales = ["leon", "perro", "gato"];
console.log(animales);
console.log(...animales); // devuelve los valores del array

// Una forma simple de usar spread es cuando tenemos un array 
// y necesitamos asignar los valores de otro array.

const animales1 = ["leon", "perro", "gato"];
const animales2 = ["gato", "delfin", "elefante"];

const animalesAll = [...animales1, ...animales2];

console.log(animalesAll); // [ 'leon', 'perro', 'gato', 'gato', 'delfin', 'elefante' ]

// el operador spread retorno los items y fueron asignados 
// dentro del array animales

// También lo podemos utilizar para asignar / crear 
// propiedad:valor de objetos.
const persona = {
    nombre: "Nicolas",
    apellido: "Isnardi",
  };
  
  const datosUsuario = {
    username: "nisnardi",
    password: "1234",
  };
  
  const user = {
    ...persona,
    ...datosUsuario,
  };
  
  console.log(user);
  
  // {
  //   nombre: 'Nicolas',
  //   apellido: 'Isnardi',
  //   username: 'nisnardi',
  //   password: '1234'
  // }

  // Este concepto se utiliza mucho en casos como cuando utilizamos 
  // redux en nuestras aplicaciones React o React Native para 
  // asignar parte del estado actual y parte del estado nuevo 
  // y devolver la última versión del mismo. Es como un merge.

  // En el caso de objetos también podemos aprovechar a sobrescribir 
  // propiedades y valores.

  const persona2 = {
    nombre: "Nicolas",
    apellido: "Isnardi",
  };
  
  const datosUsuario2 = {
    username: "nisnardi",
    password: "1234",
  };
  
  const user2 = {
    ...persona2,
    ...datosUsuario2,
    nombre: "Simon",
    username: "mono2019",
  };
  
  console.log(user2);
  
  // {
  //   nombre: 'Simon',
  //   apellido: 'Isnardi',
  //   username: 'mono2019',
  //   password: '1234'
  // }

  // Dado que el operador spread se utiliza antes que la asignación de 
  // las propiedades nombre y username queda la última versión de las 
  // mismas con los valores Simon y mono2019 respectivamente.


  // También podemos utilizar este concepto en funciónes a la hora de 
  // pasar valores como parametros

  function mostrarDatosEnPantalla(valor1, valor2) {
    console.log(`valor1: ${valor1}, valor2: ${valor2}`);
  }
  
  const animales3 = ["perro", "gato"];
  
  mostrarDatosEnPantalla(...animales3); // valor1: perro, valor2: gato

  // Y también lo podemos utilizar de la siguiente forma que puede ser 
  // confuso con rest:
  function mostrarDatosEnPantalla2(valor1, valor2, valor3, valor4) {
    console.log(
      `valor1: ${valor1}, valor2: ${valor2}, valor3: ${valor3}, valor4: ${valor4}`
    );
  }
  
  const animales4 = ["perro", "gato"];
  
  mostrarDatosEnPantalla2("delfin", ...animales4, "leon");

  // Otra buena opción es utilizar spread a la hora de tener que validar 
  // si unos valores deben o no ser parte de una colección.

  //Utilizando spread y un if ternario podemos establecer si los valores 
  // van a pertenecer a la nueva colección o no.
const animales10 = ["leon", "perro", "gato"];
const animales20 = ["delfin", "loro", "mono"];

const animales10y20 = [...animales10, ...(false ? animales20 : [])];

console.log(animales10y20); //[ 'leon', 'perro', 'gato' ]

// Este concepto también lo podemos utilizar con objetos.
const mostrarOtro = false;
const persona10 = {
  nombre: "Nicolas",
  apellido: "Isnardi",
};

const datosUsuario10 = {
  username: "nisnardi",
  password: "1234",
};

const user10 = {
  ...persona10,
  ...datosUsuario10,
  ...(mostrarOtro ? { nombre: "Simon", username: "mono2019" } : {}),
};

console.log(user);
// {
//   nombre: 'Nicolas',
//   apellido: 'Isnardi',
//   username: 'nisnardi',
//   password: '1234'
// }

//Dado que la condición es false estamos utilizando spread en un 
// objeto vacío por lo cual no se agreaga o modifica ninguna 
// propiedad / valor existente.