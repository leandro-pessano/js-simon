// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeri = [];
var indovinati = [];

for (var i = 0; i < 5; i++) {
  numeri.push(Math.floor(Math.random()*99)+1);
}
alert('I numeri sono: ' + numeri);

setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    var num = prompt('Inserisci numero');
    if (num == numeri[i]) {
      indovinati.push(num);
    }
  }
  console.log('Hai indovinato ' + indovinati.length + ' numeri. E sono: ' + indovinati);
}, 3000);

console.log(numeri);
