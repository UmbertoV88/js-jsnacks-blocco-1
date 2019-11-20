//
// jSnack 4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var invitati = ["pippo", "pluto", "paperino", "topolino"];
console.log(invitati);
var utente = prompt("Inserire il nome sull'invito")
console.log(utente);

// 0 è uguale a false e 1 è uguale a true
var utente_invitato = 0;

for (var i = 0; i < invitati.length; i++) {
    console.log(invitati[i]);
    if (utente == invitati[i]) {
        utente_invitato = 1;
        // console.log("benvenuto " + utente);
    }else {

    }
}
if (utente_invitato == 1) {
    console.log("Benvenuto " + utente);
}else {
    console.log("Il tuo nome non è presente " + utente);
}
