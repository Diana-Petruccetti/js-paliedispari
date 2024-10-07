
// TRACCIA

/*
// Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.

// Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Consigli del giorno
- Scriviamo sempre in italiano i passaggi che vogliamo fare.
- Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da farsi quando si crea una funzione:
- Come dovrebbe chiamarsi?
- Ho bisogno di parametri?
- Devo restituire un valore?
- Se sì, di che tipo? */


// 0. Strumenti conosciuti:
/* 
- Let, const
- Prompt
- Console.log
- Operatori aritmetici e di comparazione relazionali e logici
- String
- Numbers
- Conditionals if/elseif/else
- Loop
- Array
- Funzioni
*/

// CREA SISTEMA CONTROLLO PAROLE PALINDROME
// 1. Preparazione

// 2. Raccolta Dati
// Prompt che chiede all'utente una parola
let string = prompt('Scrivi una parola');

// 3. Elaborazione Dati
function isPalindrome(string) {

    let reverse = string.split().reverse().join();
    let message;

    if (reverse == string) {
        message = 'La tua parola è polindroma';
    } else {
        message = 'La tua parola non è polindroma';
    }
    console.log(message);
    alert(message);
}

// 4. Output
console.log(isPalindrome(string));

//---------------------------------------------------------------------------

// CREA GIOCO PARI O DISPARI CONTRO PC
// 1. Preparazione
let playerChoice, playerNumber, pcNumber;

// 2. Raccolta Dati
playerChoice = 'pari';

playerNumber = 3;

pcNumber = getRandomNumber(1, 5);
console.log(pcNumber, playerNumber);

const sum = playerNumber + pcNumber;

// 3. Elaborazione Dati
const result = is_even(sum);
console.log(result);

function getRandomNumer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function is_even(numb) {
    if (numb % 2 === 0) {
        return true;
    }
    return false;
}

// 4. Output
if (playerChoice === 'pari' && is_even(sum)) {
    console.log('Hai vinto!');

} else {
    console.log('Hai perso!');
}