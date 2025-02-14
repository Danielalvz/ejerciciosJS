const femaleStundent = ["Daniela", "Mara", "Catalina", "Yesenia", "Maria"];
const maleStudent = ["Andres", "Juan David", "Santiago", "Joalvi", "Carlos"];

const students = femaleStundent.concat(maleStudent);

const lastFemaleIndex = students.indexOf("Maria");

const firstMaleIndex = students.indexOf("Andres");
const lastMaleIndex = students.indexOf("Carlos");

console.log("Nombres de las alumnas: ");
students.forEach((femaleStundent, index) => {
    if(index <= lastFemaleIndex) {
        console.log(`Indice: ${index}, alumna ${femaleStundent}`);
    }
});

console.log("Nombres de los alumnos: ");

let i = firstMaleIndex;
while(i <= lastMaleIndex) {
    console.log(`Indice: ${i}, alumno ${students[i]}`);
    i++;
}

console.log("Todos los alumnos:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}