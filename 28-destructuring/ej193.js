const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// Usando destructuring definir las variables lunes, miercoles y viernes y 
// asignarle los valores que le corresponde a la colección dias.

const [monday, , wednesday, , friday] = days;

console.log(monday);
console.log(wednesday);
console.log(friday);