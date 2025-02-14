const reverseText = function (text) {
    if (typeof text !== "string") {
        console.log("El parámetro debe ser un texto.");
        return;
    }

    console.log(text.split("").reverse().join(""));
}

reverseText("HOLA")