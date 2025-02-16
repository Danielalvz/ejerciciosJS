  const contador = (function () {
    // Variable privada
    let acumulador = 0;
  
    return {
      increment: function () {
        acumulador++;
      },
      decrement: function () {
        acumulador--;
      },
      reset: function () {
        acumulador = 0;
      },
      getCount: function () {
        console.log(acumulador);
      },
    };
  })();
  
  // Parte anterior del ejercicio
  contador.increment();
  contador.getCount(); // 1
  contador.increment();
  contador.getCount(); // 2
  
  // Nuevo código
  contador.decrement();
  contador.getCount(); // 1
  contador.reset();
  contador.getCount(); // 0
  
  // Intentar acceder a la variable acumulador
  console.log(contador.acumulador); // undefined