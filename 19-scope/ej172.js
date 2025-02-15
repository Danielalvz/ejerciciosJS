function createMultiply(numero1) {
    return function (numero2) {
      return numero1 * numero2;
    };
}

// Completa el código para que al llamar a la función crearMultiplicador 
// retorne 15.
// Muestra en pantalla el resultado de ejecutar la función 
// crearMultiplicador.

// Retorna una función que multiplica por 5
const multiplyBy5 = createMultiply(5); 
const result = multiplyBy5(3);

console.log(result);