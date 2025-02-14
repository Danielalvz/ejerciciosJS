let number = 14;
let asterisk = [];

while(number > 0) {
    asterisk.push("*".repeat(number));
    number--;
}

console.log(asterisk.join("\n"));
