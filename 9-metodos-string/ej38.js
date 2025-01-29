const name = "Dani";

const numberOfLetters = name.length;

console.log("La cantidad de letras del nombre son:",numberOfLetters);


Array.from(name).forEach(letter => {
    console.log(letter);   
});

// for (let index = 0; index < name.length; index++) {
//     console.log(name[index]);
// }