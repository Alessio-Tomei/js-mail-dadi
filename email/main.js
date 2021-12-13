// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const whiteListEmail = ['pino@pino.com','gino@gino.com','silla@silla.com','aldo@aldo.com'];

const userEmail = prompt('Inserisci la tua email:');

let boolCheckEmail = false;

for (let index = 0; index < whiteListEmail.length; index++) {
    if (userEmail == whiteListEmail[index]) {
        boolCheckEmail = true;
    }    
}

if (boolCheckEmail) {
    console.log('La tua email è presente nella whitelist.');
}else {
    console.log('La tua email NON è presente nella whitelist.');
}