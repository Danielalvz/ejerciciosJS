let counter = 1;

// Crear un timer que se llame cada 1 segundo y muestre en pantalla 
// un mensaje.
// A los 10 segundos cortar la ejecución del timer.

const message = () => {
    console.log(`Mensaje ${counter}`);
    console.log("*".repeat(counter)); 
    counter++;

    if(counter > 10) {
        clearInterval(idTimer);
        console.log("Timer detenido.");
    }
}

const idTimer = setInterval(message, 1000);



