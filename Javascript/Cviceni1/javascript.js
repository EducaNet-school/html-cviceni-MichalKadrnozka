function pozdrav(){
    let jmeno = document.getElementById("jméno").value;
    document.getElementById("jmeno_vysledek").innerHTML = "Ahoj, uživateli " + jmeno + "!";
}
function mocniny(){
    let cislo = document.getElementById("cislo").value;
    let mocnina = document.getElementById("mocnina").value;
    document.getElementById("mocnina_vysledek").innerHTML = "Výsledek je " + Math.pow(cislo, mocnina);
}
function vypis_slova(){
    let slovo = document.getElementById("slovo").value;
    let pocet_pismen = 1
    while (pocet_pismen <= slovo.length) {
        document.getElementById("vypis_slova_vysledek").innerHTML += slovo.slice(0, pocet_pismen)+ "<br>";
        pocet_pismen++;
    }
}
function minimalni_cislo(){
    let cislo1 = document.getElementById("cislo1").value;
    let cislo2 = document.getElementById("cislo2").value;
    let cislo3 = document.getElementById("cislo3").value;
    document.getElementById("minimalni_cislo_vysledek").innerHTML = "Nejmenší číslo je " + Math.min(cislo1, cislo2, cislo3);
}
function maximalni_cislo(){
    let cislo4 = document.getElementById("cislo4").value;
    let cislo5 = document.getElementById("cislo5").value;
    let cislo6 = document.getElementById("cislo6").value;
    document.getElementById("maximalni_cislo_vysledek").innerHTML = "Největší číslo je " + Math.max(cislo4, cislo5, cislo6);
}
function faktorial(){
    var n = document.getElementById("faktorial").value;
    var faktorial = 1
    var i = 1
    while (i <= n){
        faktorial = faktorial * i
        i++
    }
    document.getElementById("faktorial_vysledek").innerHTML = "Faktoriál čísla " + n + " je " + faktorial;
}
function soucet_rady(){
    var n = document.getElementById("soucet_rady").value;
    var soucet_rady = 0
    var i = 1
    while (i <= n){
        soucet_rady = soucet_rady + i
        i++
    }
    var vypocet = "";
    for (var i = 1; i < n; i++) {
        vypocet += i + " + ";
    }
    vypocet += n;
    document.getElementById("soucet_rady_vypocet").innerHTML = "Výpočet řady je " + vypocet;
    document.getElementById("soucet_rady_vysledek").innerHTML = "Součet řady je " + soucet_rady;
}
