const message = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
const pi = parseFloat(message.slice(0, 4));
const meaningOfLife = parseInt(message.slice(38, 40));

console.log(pi);
console.log(meaningOfLife);

const result = pi + meaningOfLife;
console.log(result);

console.log(`${result} es el resultado de sumar las variables pi y significadoDeLaVida, concatenando los valores. Utilizar el método toString para convertir los numbers a strings.`);



