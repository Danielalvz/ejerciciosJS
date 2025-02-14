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

let likedMutants = mutants.filter(mutant => {
    return [
        "Prof. Charles Francis Xavier", 
        "Jean Elaine Grey", 
        'James "Logan" Howlett'].includes(mutant)
});

likedMutants = likedMutants.map(mutant => `<3 ${mutant}`);

console.log(likedMutants);

console.table(mutants); 
console.table(likedMutants); 
