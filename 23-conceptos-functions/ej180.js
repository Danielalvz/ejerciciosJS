function showNumbers(number) {
    console.log(number);
    if (number < 10) {
        showNumbers(number + 1);
    }
}

showNumbers(0); 
console.log("----");
showNumbers(4);
