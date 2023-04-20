var num1_elem = document.getElementById("num1")
var num2_elem = document.getElementById("num2")
var result_elem = document.getElementById("result")
let result

function plus(){
    result = parseInt(num1_elem.value) + parseInt(num2_elem.value)
    result_elem.innerHTML = result;
}
function minus(){
    result = parseInt(num1_elem.value) - parseInt(num2_elem.value)
    result_elem.innerHTML = result;
}
function multiply(){
    result = parseInt(num1_elem.value) * parseInt(num2_elem.value)
    result_elem.innerHTML = result;
}
function divide(){
    result = parseInt(num1_elem.value) / parseInt(num2_elem.value)
    result_elem.innerHTML = result;
}