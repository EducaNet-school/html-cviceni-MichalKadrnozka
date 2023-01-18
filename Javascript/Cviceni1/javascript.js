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