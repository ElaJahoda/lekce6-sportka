<<<<<<< HEAD
// Udělej losování klasické Sportky



// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku :

let vyherniCisla = document.querySelector('#vyherni-cisla');
let osudi = [];

for (let i = 1; i <= 49; i = i + 1) {
    // Máš osudí čísel od 1 do 49
    osudi.push(i);
}

// Náhodně z tohoto osudí vyber 7 čísel
let tazenaCisla = [];

for (let i = 0; i < 7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniCislo];
// Žádné číslo se nesmí v tahu opakovat (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);
}

// Z každého vylosovaného čísla vygeneruj následující HTML kód: ...


for (let j = 0; j < tazenaCisla.length; j++) {
    vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>';
}
||||||| f8b69a3
=======
// SPORTKA

let osudi = [];
let tazenaCisla = [];
let vyherniCisla = document.querySelector('#vyherni-cisla');

// generovani osudi
for (let i = 1; i <= 49; i = i + 1) {
    osudi.push(i);
}

// z osudi vyberu 7 nahodnych cisel
for (let i = 0; i < 7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];
    
    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);
}

// vypis do HTML
for (let j = 0; j < tazenaCisla.length; j++) {
    vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>';
}
>>>>>>> upstream/develop-2022
