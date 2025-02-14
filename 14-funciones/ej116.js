const bestArgentinePlayer = function(n) {
    const players = {
        18: "Nery Pumpido",
        5: "José Luis Brown",
        9: "José Cuciuffo",
        19: "Óscar Ruggeri",
        14: "Ricardo Giusti",
        16: "Julio Olarticoechea",
        2: "Sergio Batista",
        12: "Héctor Enrique",
        7: "Jorge Burruchaga",
        10: "Diego Armando Maradona",
        11: "Jorge Valdano"
    };

    const player = players[n] || "Carlos Bilardo"; 
    console.log(`${n}, ${player}`);
    return player;
}

bestArgentinePlayer(10); 
bestArgentinePlayer(7); 
bestArgentinePlayer(99);