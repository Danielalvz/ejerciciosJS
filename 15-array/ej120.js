const students = [];

// Asignar el nombre de un alumno en los ínidices: 0, 1, 2, 3, 4 y 5

students[0] = "Oliver";
students[1] = "Patricia";
students[2] = "Andres";
students[3] = "Carla";
students[4] = "Susana";
students[5] = "Camilo";

// Mostrar en consola cada uno de los elementos utilizando los índices dados
// Ejemplo de formato de salida: índice 0: Marta

students.forEach((student, index) => {
    console.log(`indice ${index}: ${student}`);
})




