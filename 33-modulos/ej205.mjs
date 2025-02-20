import { showNumbers, start, end } from "./moduloej205.mjs";

showNumbers(100, 400);
showNumbers(800, 25);
showNumbers(50, 50);
showNumbers("50", 50);

showNumbers(start, end);

import { start as number1, end as number2 } from "./moduloej205.mjs";

// Usar las variables renombradas
showNumbers(number1, number2);
