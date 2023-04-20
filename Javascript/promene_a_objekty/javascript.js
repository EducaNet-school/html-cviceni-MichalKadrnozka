console.log("PROMĚNÉ:")
let jmeno = "Michal"
console.log(jmeno)
jmeno = "Franta"
console.log(jmeno)

console.log("TYPY PROMĚNÝCH:")
let a = 75
console.log(typeof a)
a = "blabla"
console.log(typeof a)

console.log("SEZNAMY/POLE:")
den_v_tydnu = new Array("Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota");
console.log(den_v_tydnu[3]);

let datum = new Date()
let cislo_dne = datum.getDay()
console.log("Dnes je", cislo_dne, "den v týdnu")

let pole = []
pole[0] = 45
for(let i = 0; i < 10; i++){
    pole[i] = i + 1;
}

var person = {
    name: "Nemichal",
    age: 28,
    city: "Brno",
}
console.log(person.name)


function createPerson(name, age, job){
    var a = new Object();
    a.name = name
    a.age = age
    a.job = job
    a.sayName = function(){
        alert(this.name);
    };
    return a
}

var person1 = createPerson("Někdo", 69, "borec")
var person2 = createPerson("NěkdoDruhej", 96, "děda")