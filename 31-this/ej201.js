// Explica con tus propias palabras como funciona this dentro de las funciones.
function saludar() {
  console.log(this);
}

saludar();
// Escribir utilizando los comentarios de JavaScript lo que creas que hace referencia this.
// También explicar cómo funcionan las funciones call, apply y bind y que diferencias tiene

// Cuando una función se llama de forma "normal" (sin un objeto antes del
//  punto), this apunta al objeto global