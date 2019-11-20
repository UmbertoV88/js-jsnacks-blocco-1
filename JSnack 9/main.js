 // Calcola la somma e la media dei primi 10 numeri.

var media = 0;
var somma = 0;
for (var i = 1; i <= 10; i++) {
    console.log(i);
    somma = somma + i;
    media = somma / 10;
}

console.log("La somma è " + somma);
console.log("La media è " + media);
