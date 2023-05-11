var nakupni_seznam = new Array()
var i = 0
function nakup(){
    nakupni_seznam[i] = document.getElementById("polozka").value;
    document.getElementById("nakupni_seznam").innerHTML = nakupni_seznam;
    if(i < 5){
        document.getElementById("pocet_polozek").innerHTML = "To ještě unesu";
    } else if(i >= 5 && i <= 9){
        document.getElementById("pocet_polozek").innerHTML = "Pro takový nákup asi zajedu autem";
    } else if(i > 9){
        document.getElementById("pocet_polozek").innerHTML = "Toho je moc, to radši nakoupím přes internet";
    }
    document.getElementById("polozka").value = null
    i++
}