const colors = ["orange", "red", "green", "yellow", "white", "blue", "black"]
function color_change(){
    var random = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[random]
    document.getElementById("color").innerHTML = colors[random]
}