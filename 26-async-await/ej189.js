function createPromise(message) {
  return new Promise((onSucess) => {
    setTimeout(() => {
      onSucess(message);
    }, 5000);
  });
}

// Crear una función con el nombre mostrarPromesa que acepta un mensaje 
// como parámetro
async function showPromise(message) {
  const result = await createPromise(message);
  console.log(result);
}

// La función mostrarPromesa es una función async y nos permite usar 
// await adentro para esperar el resultado de llamar a la función 
// crearPromesa.
showPromise("Wow, estamos usando async / await.");