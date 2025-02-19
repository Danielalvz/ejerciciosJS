// Sin mirar el contenido del curso y con tus propias palabras intenta enteder a quién hace referencia this en este contexto:
const persona = {
  nombre: "Nicolas",
  saludar: function () {
    console.log(this); //Aqui `this` hace referencia al objeto `persona`
    console.log(this.nombre); //Mostrará "Nicolas" porque `this` es `persona`
  },
  saludar2: () => {
    console.log(this);
  },
};
// Qué diferencia hay si utilizamos arrow function en lugar de functions?
// Escribir utilizando los comentarios de JavaScript lo que creas que hace referencia this.

// en saludar2 -> Aquí `this` NO hace referencia a `persona`, sino al contexto global (window en navegadores o {} en Node.js)

persona.saludar(); 
//  Mostrará el objeto `persona`
//  Mostrará "Nicolas"

persona.saludar2(); 
//  Mostrará `window` en navegadores o `{}` en Node.js

// saludar usa una función normal, por lo que this hace referencia al 
// objeto persona cuando se llama como persona.saludar().

// saludar2 usa una arrow function, y las arrow functions NO tienen 
// su propio this, sino que heredan el this del contexto donde fueron 
// definidas.

// Como persona es un objeto, su contexto externo es global (window en 
// navegadores o {} en Node.js).