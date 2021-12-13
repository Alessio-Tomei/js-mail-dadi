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


let x, 
    conta1 = 0, conta2 = 0, conta3 = 0, 
    conta4 = 0, conta5 = 0, conta6 = 0;
let y = 10000000;
let k = 1666666;

for (let i = 0; i < y; i++ ) {
    x = Math.floor(Math.random()*6+1)
    if (x == 1) {
        conta1++;
    }else if (x == 2) {
        conta2++;
    }else if (x == 3) {
        conta3++;
    }else if (x == 4) {
        conta4++;
    }else if (x == 5) {
        conta5++;
    }else {
        conta6++;
    }
}

let p1 = conta1 / y; 
let p2 = conta2 / y; 
let p3 = conta3 / y; 
let p4 = conta4 / y; 
let p5 = conta5 / y; 
let p6 = conta6 / y; 

console.log ('Nuemero di rolls: ', conta1,' probabilità di 1: ', parseFloat(p1.toFixed(6)),' differenza da teoria: ', conta1-k);
console.log ('Nuemero di rolls: ', conta2,' probabilità di 2: ', parseFloat(p2.toFixed(6)),' differenza da teoria: ', conta2-k);
console.log ('Nuemero di rolls: ', conta3,' probabilità di 3: ', parseFloat(p3.toFixed(6)),' differenza da teoria: ', conta3-k);
console.log ('Nuemero di rolls: ', conta4,' probabilità di 4: ', parseFloat(p4.toFixed(6)),' differenza da teoria: ', conta4-k);
console.log ('Nuemero di rolls: ', conta5,' probabilità di 5: ', parseFloat(p5.toFixed(6)),' differenza da teoria: ', conta5-k);
console.log ('Nuemero di rolls: ', conta6,' probabilità di 6: ', parseFloat(p6.toFixed(6)),' differenza da teoria: ', conta6-k);
