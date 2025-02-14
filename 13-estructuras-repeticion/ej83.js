let number = 14;
let asterisk = [];

do {
    asterisk.push("*".repeat(number));
    number--;
} while (number > 0);

console.log(asterisk.join("\n"));
