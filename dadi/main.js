// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const diceRolls = [Math.floor(Math.random()*6+1) , Math.floor(Math.random()*6+1)];
console.log(diceRolls);
if (diceRolls[0] > diceRolls[1]) {
    console.log('Il giocatore 1 ha vinto!');
}else if (diceRolls[0] == diceRolls[1]) {
    console.log('Pareggio!');
}else {
    console.log('Il giocatore 2 ha vinto!');
}