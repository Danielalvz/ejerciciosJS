let asterisk = [];

for (let number = 14; number > 0; number--) {
    asterisk.push("*".repeat(number));
}

console.log(asterisk.join("\n"));
