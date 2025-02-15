function contar() {
    let contador = 0;
    return function () {
        contador++;
        console.log(contador);
    };
}

const incrementar = contar();
incrementar();
incrementar();
incrementar();
incrementar();

// Como parte del ejercicio escribe lo que pasa.

// La funcion se ejecuta mostrando como valor 1
// Ya que la variable esta dentro del scope, como variable global
// en al fucnion padre

//Al llamar la funcion varias veces se incrementa el valor de la variable

// Se aumenta la variable contador ya que se esta ejecutando la funcion de retorno
// Al guardarla en incrementar()

// DATO IMPORTANTE
// Un closure permite que una función recuerde variables de su entorno 
// original, incluso después de que la función externa haya terminado

// Cada vez que llamamos contar(), se crea un nuevo contador, 
// pero solo podemos acceder a el si guardamos la función retornada