function faktorial() {
    var n = document.getElementById("faktorial").value;
    var faktorial = 1
    var i = 1
    while (i <= n){
        faktorial = faktorial * i
        i++
    }
    document.getElementById("faktorial_vysledek").innerHTML = "Faktoriál čísla " + n + " je " + faktorial
}