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

mutants.forEach(mutant => console.log(mutant));

// Concatenar los nombres de Jean Elaine Grey y James "Logan" Howlett
const specialMutants = "Jean Elaine Grey" + " / " + 'James "Logan" Howlett';

console.log(specialMutants);

const indexToChange = mutants.indexOf('James "Logan" Howlett');

mutants[indexToChange] = specialMutants;

mutants.forEach(mutant => console.log(mutant));
