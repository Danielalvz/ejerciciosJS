function createPromise(message, hasError = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) {
        reject("Error: Algo salió mal con la promesa.");
      } else {
        resolve(message);
      }
    }, 5000);
  });
}

async function showPromise(message, hasError = false) {
  try {
    const result = await createPromise(message, hasError);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}


showPromise("Wow, estamos usando async / await.");
showPromise("Este mensaje fallará", true);