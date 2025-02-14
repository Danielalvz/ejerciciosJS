const gamer = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage) {
        if(damage > 0) {
            this.energy -= damage;
        }

        if(this.energy < 0) {
            console.log("Perdió toda su energia");
            this.energy = 0;
        }
        this.showStatus();
    },
    recoverEnergy: function(recoveredEnergy) {
        this.energy += recoveredEnergy;

        if(this.energy > 100) {
            console.log("Tiene el máximo de energia");
            this.energy = 100;
        }

        if(recoveredEnergy < 0) {
            console.log("No se puede recuperar energia negativa");
            recoveredEnergy = 0;   
        }
        this.showStatus();
    },
    loseLife: function() {
        this.lives--;

        if(this.lives < 0) {
            console.log("No tiene vidas");
            this.lives = 0    
        }
        this.showStatus();
    }, 
    recoverLife: function() {
        this.lives++;

        if(this.lives > 99) {
            console.log("Tiene el máximo de vida");
            this.lives = 99;         
        }
        this.showStatus();
    },
    showStatus: function() {
        console.log(`El jugador ${gamer.name} tiene ${gamer.energy}% de energía y ${gamer.lives} vidas`);
    }
}

gamer.name = "Dinomon";



gamer.loseLife();
gamer.loseEnergy(10);
gamer.loseEnergy(5);
gamer.loseEnergy(15);
gamer.loseEnergy(20);
gamer.recoverEnergy(10);
gamer.loseEnergy(30);
gamer.loseEnergy(40);
gamer.loseLife();
gamer.loseLife();
gamer.recoverLife();
gamer.recoverLife();
gamer.recoverLife();
gamer.loseLife();








