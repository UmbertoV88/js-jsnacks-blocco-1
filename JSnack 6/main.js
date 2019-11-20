// Snack 6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
var inserimento = parseInt(prompt("Inserisci un numero"))

for (var i = 1; i <= inserimento; i++) {
    var potenza = i * i* i;
    console.log(potenza);
}
