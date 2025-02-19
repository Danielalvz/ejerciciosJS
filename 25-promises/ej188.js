function createPromise(delay, hasError = false) {
    return new Promise((onSuccess, onError) => {
        setTimeout(() => {
            if (hasError) {
                onError(`Pasaron ${delay} segundos y la promesa NO fue exitosa`);
            } else {
                onSuccess(`Pasaron ${delay} segundos y la promesa fue exitosa`);
            }
        }, delay * 1000);
    })
}

const promise1 = createPromise(1);
const promise5 = createPromise(5);
const promise10 = createPromise(10);
const promise3Error = createPromise(3, true);



promise1.then((message) => console.log(message));
promise3Error.catch((error) => console.log(error));
promise5.then((message) => console.log(message));
promise10.then((message) => console.log(message));

