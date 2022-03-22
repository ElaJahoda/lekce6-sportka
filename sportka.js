// Udělej losování klasické Sportky


// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:


let osudi = [];

for (let i = 1; i <= 49; i = i + 1) {
    // Máš osudí čísel od 1 do 49
    osudi.push(i);
}

// Náhodně z tohoto osudí vyber 7 čísel
let tazenaCisla = [];

for (let i = 0; i < 7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length;
    let vyherniCislo = osudi[vyherniCislo];
// Žádné číslo se nesmí v tahu opakovat (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);
}