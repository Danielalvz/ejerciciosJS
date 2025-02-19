// Promises en JavaScript es una manera de manejar operaciones 
// asyncrónicas

// Promises representan un valor que puede estar disponible ahora, 
// en el futuro o nunca

// Una Promise es un objeto que representa un operación asyncrona que 
// tiene 3 estados:
// Pending: pendiente, que significa que no fue completada aún.
// Fullfiled: resuelta, que significa que la operación fue completada y 
// sin error.
// Rejected: rechazada, que significa que la promise encontró algún error 
// y no se resolvió con éxito.

const promesa = new Promise(() => {});
console.log(promesa);
// Promise { <pending> }

// Promise acepta una función como parámetro con un callback al que llamar 
// cuando se resuelva de manera exitosa.

// Una promise tiene le método then que nos permite establecer que debe 
// pasar o que código debe ejecutarse cuando la promesa se resuelva 
// con éxito.

// Then acepta también un callback que se va a ejecutar cuando la promesa 
// se resuelva.

const promesa2 = new Promise((resolve) => {
    resolve("Se resolvió con éxito la promesa");
  });
  
  promesa2.then((mensaje) => {
    console.log(mensaje);
    console.log(promesa2);
  });
  
  // Se resolvió con éxito la promesa
  // Promise { 'Se resolvió con éxito la promesa' }

  // Promise acepta como segundo parámetro una segunda función como 
  // parámetro que se puede ejecutar cuando la promesa encuentre 
  // algún error

  // Promise tiene un método catch que se puede utilizar para definir 
  // que queremos que haga el código en caso de que ocurra algún error 
  // en la ejecución.

  const promesa3 = new Promise((resolve, reject) => {
    const error = true;
  
    if (error) {
      reject(new Error("Algo salió mal"));
    } else {
      resolve("Se resolvió con éxito la promesa");
    }
  });
  
  promesa3
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.log(error);
      console.log(promesa3);
    });

    // Las Promises pueden ser anidadas
    const promesa4 = new Promise((resolve, reject) => {
        const error = false;
      
        if (error) {
          reject(new Error("Algo salió mal"));
        } else {
          resolve("Se resolvió con éxito la promesa");
        }
      });
      
      promesa4
        .then((mensaje) => {
          console.log(mensaje);
      
          return new Promise((resolve) => {
            resolve("mensaje 2");
          });
        })
        .then((mensaje) => {
          console.log(mensaje);
      
          return new Promise((resolve) => {
            resolve("mensaje 3");
          });
        })
        .then((mensaje) => {
          console.log(mensaje);
        })
        .catch((error) => {
          console.log(error);
          console.log(promesa4);
        });

// Las promises también tienen un método llamado finally que se ejecuta 
// luego que se resolvió.

// finally se ejecuta sin importar que la Promise se resuleva con éxito 
// o con error

const promesa5 = new Promise((resolve, reject) => {
    const error = false;
  
    if (error) {
      reject(new Error("Algo salió mal"));
    } else {
      resolve("Se resolvió con éxito la promesa");
    }
  });
  
  promesa5
    .then((mensaje) => {
      console.log(mensaje);
  
      return new Promise((resolve) => {
        resolve("mensaje 2");
      });
    })
    .then((mensaje) => {
      console.log(mensaje);
  
      return new Promise((resolve) => {
        resolve("mensaje 3");
      });
    })
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.log(error);
      console.log(promesa5);
    })
    .finally(() => {
      console.log("terminó todo amigos!");
    });

// En algunas oportunidades necesitamos saber cuando varias promises 
// terminaron.


// Promise tiene un método llamado all que recibe una colleción de 
// promesas y ejecuta el método then cuando se resuelven

// El método then recibe un array con todos los valores devueltos 
// por las promises utilizadas en .all

const promise10 = new Promise((onSuccess) => {
    console.log("Promise 10");
    setTimeout(onSuccess(10), 2000);
  });
  
  const promise20 = new Promise((onSuccess) => {
    console.log("Promise 20");
    setTimeout(onSuccess, 10000);
  });
  
  const promise30 = new Promise((onSuccess) => {
    console.log("Promise 30");
    setTimeout(onSuccess, 5000);
  });
  
  const promises = [promise10, promise20, promise30];
  
  Promise.all(promises).then((values) => {
    console.log(values);
    console.log("terminaron");
  });

// Si queremos saber que todas las promises se resolvieron 
// exitosamente podemos utilizar allSettled

// allSettled devuelve un array de objetos que tiene dos 
// propiedades status y value o reason

const promise100 = new Promise((onSuccess) => {
    console.log("Promise 100");
    setTimeout(onSuccess(100), 2000);
  });
  
  const promise200 = new Promise((onSuccess, onError) => {
    console.log("Promise 200");
    onError(new Error("Error que llega de la promise 200"));
  });
  
  const promise300 = new Promise((onSuccess) => {
    console.log("Promise 300");
    setTimeout(onSuccess, 5000);
  });
  
  const promises2 = [promise100, promise200, promise300];
  
  Promise.allSettled(promises2).then((results) => {
    console.log(results);
    console.log("All settled");
  });