// Los objetos literales son útiles y una manera fácil de agrupar datos 
// y funcionalidad.

const persona = {
    nombre: "Nicolas",
    apellido: "Isnardi",
    mostrarNombreCompleto: function () {
      console.log(`${this.nombre} ${this.apellido}`);
    },
  };
  
  persona.mostrarNombreCompleto();

// Otra forma de escribir métodos es por medio del nombre(parametros) {}.
const persona2 = {
    nombre: "Nicolas",
    apellido: "Isnardi",
  
    mostrarNombreCompleto() {
      console.log(`${this.nombre} ${this.apellido}`);
    },
  };
  
  persona2.mostrarNombreCompleto();

// Funciones constructoras

// Para poder crear más de un objeto con la misma estructura y 
// funcionalidad podemos utilizar el concepto de funciones constructoras

// Las funciones constructoras son funciones que retoran una nueva 
// instancia de un objeto

// Para crear una nueva instancia la función tiene que ser llamada 
// con la palabra reservada new

// La función acepta parámetros como cualquier otra función.
// Dentro de la función se utiliza la palabra reservada this para 
// establecer valores a la nueva instancia.

// Cuando llamamos una función con new un nuevo objeto se crea y 
// eso se llama instancia.

// La función constructora retorna la nueva instancia de manera implícita 
// por lo cual no necesitamos hacer un return.

// Podemos establecer el nombre con la primer letra en mayúscula para 
// distinguir que es una función constructora y no una función normal.

// La función constructora podemos pensarla como un template para crear 
// objetos que tengan la misma estructura y funcionalidad para que sea 
// más fácil crear y mantener objetos.

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mostrarNombreCompleto = function () {
      console.log(`${this.nombre} ${this.apellido}`);
    };
  }
  
  const persona5 = new Persona("Nicolas", "Isnardi");
  const persona1 = new Persona("Ximena", "Cruz");
  
  persona5.mostrarNombreCompleto();
  persona1.mostrarNombreCompleto();

  console.log(persona.nombre);
  console.log(persona1.nombre);

  //vemos como utilizar una función para construir dos nuevas instancia 
  // de Persona

  // La función constructora es una función como las que vimos hasta ahora
  //  con la diferencia que utiliza la palabra reservada this para asignar 
  // un valor a una nueva instancia.


  // Metodo Create de Object

  // Otra forma de crear objetos es por medio de Object.create().
  // Este metodo acepta un objeto como parámetro para ser utilizado 
  // como prototipo.

  const Persona1= {
    nombre: "",
    apellido: "",
    mostrarNombreCompleto: function () {
      console.log(`${this.nombre} ${this.apellido}`);
    },
  };
  
  const persona6 = Object.create(Persona1);
  persona6.nombre = "Nicolas";
  persona6.apellido = "Isnardi";
  
  persona6.mostrarNombreCompleto();

  // Classes

  // JavaScript agregó Class para poder crear objetos utilizando 
  // una clase como template.

//   Para crear una clase utilizamos la palabra reservada class, 
// un Nombre con la primer letra en mayúscula y {}`
// class Persona {}

// Las clases tienen una función especial llamada constructor que 
// nos permite inicializar las propiedades de las instancias

// La función constructor acepta parámetros necesarios para 
// construir la nueva instancia

// Para crear una instancia desde una clase también utilizamos 
// la palabra reservada new

// También podemos agregarle métodos a las clases.
class Persona2 {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }

    mostrarNombreCompleto() {
        console.log(`${this.nombre} ${this.apellido}`);
    }
  }
  
  const persona7 = new Persona2("Nicolas", "Isnardi");
  persona7.mostrarNombreCompleto();
  console.log(persona7.nombre);

// Comparar objetos

// JavaScript compara objetos por referencia lo cual significa que se 
// fija si 2 objetos tienen la misma posición de memoria.

// Aún si dos objetos tienen las mismas propiedades y datos, la 
// comparación es negativa.

const persona10 = { nombre: "Nicolas" };
const persona20 = { nombre: "Nicolas" };

console.log(persona10 == persona20); // false
console.log(persona10 === persona20); // false

// Sólo asignando la misma referencia a otra variable hace que dos 
// objetos sean iguales.
const persona100 = { nombre: "Nicolas" };
const persona200 = persona100;

console.log(persona100 == persona200); //true
console.log(persona100 === persona200); //true