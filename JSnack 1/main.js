// jSnack 1: L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var numero1 = parseInt(prompt( "inserisci un numero intero"));
// console.log(numero1);

var numero2 = parseInt(prompt( "inserisci un secondo numero intero"));
// console.log(numero2);

if (numero1 > numero2) {
    console.log("Il maggiore dei due numeri è " + numero1);
}else if (numero1 < numero2){
    console.log("Il maggiore dei due numeri è " + numero2);
}else {
    console.log("I numeri sono uguali");
}
