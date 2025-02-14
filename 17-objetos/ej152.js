const user = {
    username: null,
    password: null,
    greet: function() {
        if(this.username) {
            console.log(`Hola, soy el usuario ${this.username}`);         
        } else {
            console.log("Este usuario no tiene username");         
        }
    },
    updaterUsername: function(username) {
        this.username = username;
    },
    updatePassword: function(password) {
        this.password = password;
    }
}

user.updaterUsername("Sam");
user.updatePassword("5a75d");

user.greet();
console.log(user.password);
