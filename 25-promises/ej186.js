function createPromise(message) {
    return new Promise((onSucess) => {
        onSucess(message);
    });
}

const promise = createPromise("Hola, esta es una promesa exitosa!");

promise.then((message) => {
    console.log(message); 
});