// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeri = [];
var indovinati = [];

while (numeri.length < 5) {
  var numero = Math.floor(Math.random()*99)+1;
  if (numeri.includes(numero) == false) {
    numeri.push(numero)
  }
}
alert('I numeri sono: ' + numeri);

setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt('Inserisci un numero tra 1 e 99'));
    if (numeri.includes(num) && indovinati.includes(num) == false) {
      indovinati.push(num);
    } else if (num < 1 || num > 99 || isNaN(num)) {
      alert('Devi inserire un numero tra 1 e 99');
      i--;
    }
  }
  console.log('Hai indovinato ' + indovinati.length + ' numeri. E sono: ' + indovinati);
}, 3000);

console.log(numeri);
