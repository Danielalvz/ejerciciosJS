const findIdUser =  function () {
    return 50;
}

const validUser = function () {
    const id = findIdUser();
    // return (id > 30) ? false : true; // forma de hacerlo con ternaria
    return id <= 30;
}

const message = (validUser()) 
    ? "EL usuario es válido" 
    : "EL usuario no es válido";

console.log(message);


