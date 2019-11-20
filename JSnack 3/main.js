// jSnack 3: Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
var utente = [];

for (var i = 0; i < 5; i++) {
    var numero = parseInt(prompt("Inserisci qui un numero!"));
    utente.push(numero);
}
console.log(utente);

//Calora la somma dei numeri inseriti dall'utente (ciclo FOR)

// var somma = 0;
// for (var i = 0; i < utente.length; i++) {
//     somma = somma + utente[i];
// }

//Calora la somma dei numeri inseriti dall'utente (ciclo WHILE)
var somma = 0;
var j = 0;
while (j < utente.length) {
    somma = somma + utente[j];
    j++;
}
console.log(somma);
