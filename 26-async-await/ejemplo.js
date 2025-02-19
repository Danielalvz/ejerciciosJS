// Una función puede ser declarada como async y dentro de ella se utiliza 
// await para esperar que una promesa se resuelva

// Una función declarada como async siempre devuelve una promise
// Aún retornando un valor va a estar envuelto dentro de una promise

function obtenerDatos(numero) {
    return new Promise((onSuccess) => {
      const onSuccessHandler = () => {
        let datos = [];
  
        switch (numero) {
          case 2:
            datos = ["Marta", "elefante", "Chau"];
            break;
          case 3:
            datos = ["Javier", "mono", "Hello"];
            break;
          default:
            datos = ["Nico", "perro", "Hola"];
            break;
        }
  
        onSuccess(datos);
      };
  
      setTimeout(onSuccessHandler, 1000);
    });
  }
  
  async function mostrarDatosEnPantalla() {
    const datos = await obtenerDatos(1);
    const datos1 = await obtenerDatos(2);
    const datos2 = await obtenerDatos(3);
  
    return [datos, datos1, datos2];
  }
  
  // Esta función retorna una promesa.
  mostrarDatosEnPantalla().then((datos) => console.log(datos));

  // Para manejar errores podemos utilizar try and catch

  function obtenerDatos2(numero) {
    return new Promise((onSuccess, onError) => {
      const onSuccessHandler = () => {
        let datos = [];
  
        switch (numero) {
          case 2:
            datos = ["Marta", "elefante", "Chau"];
            break;
          case 3:
            datos = ["Javier", "mono", "Hello"];
            break;
          default:
            datos = ["Nico", "perro", "Hola"];
            break;
        }
  
        if (numero === 4) {
          onError(new Error("Error en obtener datos 4"));
        } else {
          onSuccess(datos);
        }
      };
  
      setTimeout(onSuccessHandler, 1000);
    });
  }
  
  async function mostrarDatosEnPantalla2() {
    try {
      const datos = await obtenerDatos2(1);
      const datos1 = await obtenerDatos2(2);
      const datos2 = await obtenerDatos2(3);
      const datos3 = await obtenerDatos2(4);
  
      return [datos, datos1, datos2, datos3];
    } catch (error) {
      console.log(error);
    }
  }
  
  // Esta función retorna una promesa.
  mostrarDatosEnPantalla2().then((datos) => console.log(datos));