const sortNumbers = function (number1, number2, number3, descending) {
    if(
        typeof number1 !== "number" ||
        typeof number2 !== "number" ||
        typeof number3 !== "number"
    ) {
        console.log("Esta función espera valores del tipo number");
        return;
    }

    const sortedList = [number1, number2, number3].sort((a, b) => a - b);

    if(descending) {
        sortedList.reverse();
    }

    console.log(sortedList.join(", "));
    
    
}

sortNumbers(10, 8, 25);
sortNumbers(8, 10, 25);
sortNumbers(10, 8, 25, true);

