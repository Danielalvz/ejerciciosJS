const user = 'pepe2017';
const password = '12345';

const result = user == "pepe2017" & password == "12345"
    ?  "El usuario está autenticado y puede ver el contenido del sitio"
    :  "Error, no se pudo autenticar al usuario, puede intentarlo más tarde";

console.log(result);
