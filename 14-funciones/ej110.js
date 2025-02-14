const average = function(grade1, grade2, grade3, grade4, grade5) {
    const ratingList = [grade1, grade2, grade3, grade4, grade5];

    // const sum = ratingList.reduce((acc, grade) => acc + grade, 0);

    let result = 0;
    let average = 0;

    for (let i = 0; i < ratingList.length; i++) {
        result += ratingList[i];
    }

    average = result / ratingList.length;
    return average;
}

console.log(average(2, 3, 4, 5, 3));
