// jSnack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola piu corta e poi la piu lunga

var parola1 = prompt("inserisci una parola!");
var parola2 = prompt("inserisci una seconda parola!");

if (parola1.length > parola2.length) {
    alert("La parola più lunga è " + parola1);
}else if (parola1.length < parola2.length){
    alert("La parola più lunga è " + parola2);
}else {
    alert("Le parole hanno lunghezza uguale!");

}
