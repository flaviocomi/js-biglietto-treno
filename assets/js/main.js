// Calcolo prezzo del treno:


var km, eta, prezzo, scontomin, scontoover, prezzofin, html;


// Il programma dovrà chiedere all’utente il numero di chilometri
km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

// e l’età
eta = parseInt(prompt("Quanti anni hai?"));

// e dovrà calcolare il prezzo totale del viaggio. Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
prezzo = (km * 0.21);

// ma c’èuno sconto del 20% per i minorenni
scontomin = (prezzo - (prezzo / 5)).toFixed(2);

// e del 40% per gli over 65
scontoover = (prezzo - ((prezzo / 5) * 2)).toFixed(2);

// prezzo finale
if (eta < 18) {
  prezzofin = scontomin;
} else if (eta > 65) {
  prezzofin = scontoover;
} else {
  prezzofin = prezzo;
}

html = document.getElementById("price");

html.innerHTML = "Il prezzo è " + prezzofin + "€";
