
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

//infinito matematico
console.log(edad/0);
console.log(Infinity)

//NaN
console.log("Hola" / 2);
console.log("Hola" * 4);