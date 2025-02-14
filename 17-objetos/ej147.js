const user = {};

user.username = "Batman";
user.password = "Alfred1960KPO!";

const authenticateUser = (user) => {
    return user.username === "Batman" && user.password === "Alfred1960KPO!";
}

if(authenticateUser(user)) {
    console.log(user);  
} else {
    console.log("Usuario no autenticado");
}