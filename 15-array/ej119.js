const data = [42, true, function() {return 'El significado de la vida es: '}];

// Si el segundo item en el array datos es verdadero entonces
// Mostrar en consola: El significado de la vida es: 42
// Utilizar el primer y último item del array datos para formar el string 
// del mensaje pedido

const showEndText = data[data.length - 1];
const number = data[0];

if(data[1]) {
    console.log(showEndText() + number);
}