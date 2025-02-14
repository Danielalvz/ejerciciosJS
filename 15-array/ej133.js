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

const indexOfElementToStop = mutants.indexOf("Lorna Sally Dane");
console.log(indexOfElementToStop);


for (let i = 0; i < mutants.length; i++) {
    if (i === indexOfElementToStop) {
        console.log("deteniendo bucle..");
        break;
    } else {
        console.log(mutants[i]);
    }
}

console.log("A String: ", mutants.toString());
