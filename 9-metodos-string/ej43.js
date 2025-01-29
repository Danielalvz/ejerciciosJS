const text = "game of thrones";
let firstLetter, secondLetter, thirdLetter;

firstLetter = text.charAt(0);
secondLetter = text.charAt(5);
thirdLetter = text.charAt(8);

const result = firstLetter.concat(secondLetter, thirdLetter);

console.log(result.toUpperCase());
