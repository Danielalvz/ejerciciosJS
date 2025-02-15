function test() {
    if (true) {
      let number1 = 5;
      const number2 = 10;
    }
    console.log(number1);
    console.log(number2);
}
  
test();

// Como parte del ejercicio escribe lo que pasa.

// Da error porque las variables estan fuera del scope,
// estan dentro del contexto del condicional, 
// si estan fuera no pueden ser utilizadas
