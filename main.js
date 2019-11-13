// prompt: nome
var nome = prompt ("Scrivi il tuo nome");
console.log (nome);
// prompt: cognome
var cognome = prompt ("Scrivi il tuo cognome");
console.log (cognome);
// prompt: colore
var colore = prompt ("Scrivi il tuo colore preferito");
console.log (colore);
// assegno a "numero" un valore
var numero = 19
// collego la password all'id "password"
document.getElementById ("password").innerHTML = nome + cognome + colore + numero;
// rendo visibile la descrizione e il contenitore della password solo quando ho compilato i prompt
document.getElementById("genera-password").setAttribute("class", "visibile");
