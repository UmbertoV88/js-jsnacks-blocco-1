// jSnack 5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var dispari = [""];



for (var i = 0; i < 6; i++) {
    var richiesta = parseInt(prompt("Inserisci un numero intero"));
    console.log(richiesta);
    if (richiesta %2 == 1) {
        console.log(richiesta + " il numero è dispari");
        dispari.push(richiesta)
    }
}
console.log(dispari);
