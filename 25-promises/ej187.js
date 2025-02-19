let hasError = false;

function createPromise() {
    return new Promise((onSuccess, onError) => {
        if (hasError) {
            onError("Hubo un error, la promesa no se cumplió.");
        } else {
            onSuccess("Todo salió bien, la promesa se cumplió.");
        }
    })
}

const promise = createPromise();

promise
    .then((message) =>{
    console.log(message);   
    })
    .catch((error) => {
        console.log(error);       
    });