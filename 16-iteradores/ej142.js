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

// Crear un string con los nombres de todos los mutantes 
// utilizando reduce y unidos con coma

const mutantString = mutants.reduce((acc, mutant, index) => {
    if (index === 0) {
        return mutant; 
    } else {
        return acc + ", " + mutant; 
    }
}, "");


console.log("Lista de mutantes:", mutantString);
