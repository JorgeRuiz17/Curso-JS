var estatura = 1.70;
let peso = 69;
let nombre = "Jorge";
var edad;
let ciudad;

edad = 25;
ciudad = "Castro";

const apellido = "Ruiz";

const nombrecompleto = nombre + " " + apellido; 
console.log(nombrecompleto);

let docente = "victor";
let asignatura = ["Pro. Movil"];
let age = "Nose"; 

/* variable var */

function varTest() {
    if (true) {
        var x = 1;
        console.log(x); // ¿Qué crees que imprimirá aquí?
    }
    console.log(x); // ¿Qué crees que imprimirá aquí?
}

varTest();

function letTest() {
    if (true) {
        let y = 2;
        console.log(y); // ¿Qué crees que imprimirá aquí?
    }
    console.log(y); // ¿Qué crees que imprimirá aquí?
}

letTest();

const z = 3;
console.log(z); // ¿Qué crees que imprimirá aquí?

z = 4; // ¿Qué pasará aquí?
console.log(z);