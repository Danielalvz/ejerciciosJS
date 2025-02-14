const user = {};

user.username = "Batman";
user.password = "Alfred1960KPO!";

const authenticateUser = (username, password) => {
    return username === "Batman" && password === "Alfred1960KPO!";
}

if(authenticateUser(user.username, user.password)) {
    console.log(user);  
} else {
    console.log("Usuario no autenticado");
}