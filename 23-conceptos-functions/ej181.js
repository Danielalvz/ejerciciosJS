function createMultiplier(factor) {
    return function(input) {
        return input * factor;
    }
}

const double = createMultiplier(2);

console.log(double(10));

const triple = createMultiplier(3);
console.log(triple(4));
