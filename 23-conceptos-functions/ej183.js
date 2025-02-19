  const counter = (function () {
    // Variable privada
    let accumulator = 0;
  
    return {
      increment: function () {
        accumulator++;
      },
      decrement: function () {
        accumulator--;
      },
      reset: function () {
        accumulator = 0;
      },
      getCount: function () {
        console.log(accumulator);
      },
    };
  })();
  
  // Parte anterior del ejercicio
  counter.increment();
  counter.getCount(); // 1
  counter.increment();
  counter.getCount(); // 2
  
  // Nuevo código
  counter.decrement();
  counter.getCount(); // 1
  counter.reset();
  counter.getCount(); // 0
  
  // Intentar acceder a la variable accumulator
  console.log(counter.accumulator); // undefined