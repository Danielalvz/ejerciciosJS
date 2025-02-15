function greet(message, goodbye) {
    console.log(message);
    goodbye();
}

function goodbye() {
    console.log("Hasta luego, vuelve pronto!");
}

greet("Bienvenidos a JavaScript", goodbye);