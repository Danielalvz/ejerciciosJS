const authenticateUser = function(user, password) {
    const validUsers = [
        { username: "nacho", pass: "Nerd1979" },
        { username: "pedro", pass: "Batman0217" },
        { username: "marta", pass: "Madre2312" }
    ]

    const findUser = validUsers.find(u => u.username === user && u.pass === password);
    
    if(findUser) {
        console.log(`Bienvenido ${user}, te estábamos esperando`);
    } else {
        console.log("Por favor ingrese credenciales válidas");
    }
}

authenticateUser("nacho", "Nerd1979");
authenticateUser("pedro", "Batman0217");
authenticateUser("juan", "Batman0217");
