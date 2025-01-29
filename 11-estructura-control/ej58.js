let hour;
let message;

hour = 22;

if(hour < 12 && hour > 5) {
   message = "Buen día";
} else if (hour >= 12 && hour < 20) {
    message = "Buenas tardes";
} else {
    message = "Buenas noches";
}

console.log(message);
