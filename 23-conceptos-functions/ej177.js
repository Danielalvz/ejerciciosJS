function greet() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(`¡Hola, ${arguments[i]}!`);
      }
}

greet("Nicolas", "Natalia", "Javier", "Ana");

// Las funciones tienen un parámetro especial llamado arguments que es 
// un objeto que funciona como tu array

// Tiene una propiedad length que retorna la cantidad de items que 
// fueron pasados por parámetro cuando se ejecutó la función

// Podemos acceder a cada item utilizando arguments[indice] donde 
// índice es un número entre 0 (primer item) y la longitud - 1