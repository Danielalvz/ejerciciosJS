const user = { name: "Dani"}

function isUserValid(name) {
    if(name === user.name) {
        console.log("Loggeo exitoso");       
    } else {
        console.log("error usuario no valido");    
    }
}

isUserValid("Dani")