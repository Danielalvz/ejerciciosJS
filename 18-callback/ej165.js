const numbers = [1, 5, 3, 8, 2, 10];

function map(collection, callback) {
    let result = [];

    collection.forEach((number) => {
        let multipliedNumber = callback(number);
        result.push(multipliedNumber);    
    });

    return result;
}

const multipleidNumbers = map(numbers, (n) => n * 2);

console.log(multipleidNumbers);
