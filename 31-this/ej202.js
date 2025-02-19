// En un iterador, utilizarías function o arrow functions?
// Podes explicarlo con tus propias palabras?
// Escribir utilizando los comentarios de JavaScript.

// En un iterador, generalmente es mejor usar arrow 
// functions (=>) porque tienen un comportamiento más predecible con this

// No crean su propio this, sino que heredan el this del contexto donde
//  fueron definidas

// en un iterador
// Como el forEach ejecuta una nueva función, modo function() el valor de 
// this cambia 
// y apunta al this global (window en navegadores o undefined en strict 
// mode).

//arrow functions no crean su propio this.
// hereda this del contexto donde fue declarada

// ✔️ Si this se usa dentro de un método de un objeto → funciona bien.
// ✔️ Si this se usa dentro de un forEach o setTimeout con una función regular → pierde el contexto.
// ✔️ Si usas arrow function (=>), this se mantiene y no se pierde.