// Crear un objeto literal persona con las siguientes propiedades: nombre, apellido.

const person = {
    name: "Dani",
    lastName: "L",
    greet: function () {
        console.log(`Hola ${this.name} ${this.lastName}`);
    }
}

// Utilizar for in para recorrer las propiedades y mostrarlas en pantalla.
for (const key in person) {
    if (typeof person[key] === "function") {
        person[key](); // Ejecutar métodos
    } else {
        console.log(`${key}: ${person[key]}`);
    }
}

// Una vez que el código corre y hace lo pedido agregar un método saludar que muestre el siguiente mensaje Hola ${tu nombre} ${tu apellido}.
