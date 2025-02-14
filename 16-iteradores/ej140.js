const mutants = ["Prof. Charles Francis Xavier",
    "Scott Summers",
    'Dr. Henry Philip "Hank" McCoy',
    'Jean Elaine Grey',
    'Calvin Montgomery Rankin',
    'Kevin Sydney',
    'Lorna Sally Dane',
    'Alexander Summers',
    'Suzanne Chan',
    'James "Logan" Howlett',
    'Ororo Monroe'
];

// Filtrar la lista de mutantes removiendo a Scott Summers 
// sin alterar la lista original

const filteredList = mutants.filter(mutant => mutant !== "Scott Summers");
console.log(filteredList);

// Mostrar el mutante en el índice 1 en ambas listas
console.log("Mutante en índice 1 (original):", mutants[1]);
console.log("Mutante en índice 1 (filtrada):", filteredList[1]);
