// Crear una array de gastos para un viaje, por ejemplo 100 pesos de hotel, 1000 de viaje y 
// 200 de comida


const expenses = [
    { expense: "Hotel", value: 100 },
    { expense: "Comida", value: 200 },
    { expense: "Transporte", value: 150 }
];

const totalExpenses =expenses.reduce((total, expense) => total + expense.value, 0)

// Sumar todos los valuees de los gastos utilizando reduce
// const tripExpenses = [100, 200, 150, 300, 50, 20];
// const expensesSum = tripExpenses.reduce((total, expense) => total + expense, 0);

console.log("Gastos de viaje: ", totalExpenses);
