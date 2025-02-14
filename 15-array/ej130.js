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

const sortedList = Array.from(mutants).sort();
const revertedlist = Array.from(sortedList).reverse();
const listJoinedBy = Array.from(sortedList).join(" * ");


console.log("Lista original: ", mutants);
console.log("Lista ordenada", sortedList);
console.log("Lista revertida: ", revertedlist);
console.log("Nombres de mutantes sepadaros por * ", listJoinedBy);


