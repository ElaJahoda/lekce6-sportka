// SPORTKA

    let historieHer = document.querySelector('#historie-her');
    let pocetOpakovani = 0;
    let osudi = [];
    let tazenaCisla = [];
    let vyherniCisla = document.querySelector('#vyherni-cisla');
 // generovani osudi
    for (let i = 1; i <= 49; i = i + 1) {
        osudi.push(i);
    }
    let x = 0;

// 1. Uprav losování tak, že se čísla vygenerují až na tlačítko “losuj”.
// function klik() {
//     for (let i = 0; i < 7; i++) { 
//         let vyherniIndex = Math.floor(Math.random() * osudi.length);
//         let vyherniCislo = osudi[vyherniIndex];
//         tazenaCisla.push(vyherniCislo);
//         osudi.splice(vyherniIndex, 1);
// }
// // vypis do HTML
// for (let j = 0; j < tazenaCisla.length; j++) {
//     vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>';
// }}

//2. Uprav výběr čísel tak, že mezi vylosováním každého bude 2 sekundy pauza.
function klik(){
    if(x == 1){
x = 0;
historieHer.innerHTML += tazenaCisla + '</br>';  
vynulovat()
}

let i = setInterval(function(){
        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];
        tazenaCisla.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1); 
        pocetOpakovani++;
        vyherniCisla.innerHTML += '<span class="cislo">' + vyherniCislo + '</span>';
        if(pocetOpakovani === 7) {
            clearInterval(i);
            x = 1;
        }
    }, 200);

}

//3. Po ukončení losování umožni losovat znovu, ale předchozí hru zapiš do nového elementu “historie her”
function vynulovat() {
    osudi = [];
    for (let i = 1; i <= 49; i = i + 1) {
        osudi.push(i);
    }
    tazenaCisla = [];
    vyherniCisla.textContent = ' ';
    pocetOpakovani = 0;
}
