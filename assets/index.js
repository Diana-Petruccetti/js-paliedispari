
// TRACCIA

/*
// Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

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

//CREA SISTEMA CONTROLLO PAROLE PALINDROME
// 1. Preparazione

// 2. Raccolta Dati
// Prompt che chiede all'utente una parola
let string = prompt('Scrivi una parola');

// 3. Elaborazione Dati
function isPalindrome(string) {

    let reverse = string.split('').reverse().join('');

    if (reverse == string) {
        let message = 'La tua parola è polindroma';
    } else {
    let message = 'La tua parola non è polindroma';
    }
    console.log(isPalindrome(string));
}

// 4. Output