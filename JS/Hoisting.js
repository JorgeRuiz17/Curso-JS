/* El hoisting es un comportamiento de JavaScript donde las 
declaraciones de variables y funciones se mueven al principio
 de su contexto de ejecución (es decir, su scope) 
 antes de que se ejecute el código. Sin embargo, 
 solo las declaraciones se elevan, no las inicializaciones. */

/*console.log(nombre)
let nombre = 'ho'*/

/* 
console.log(x); // undefined
var x = 5;
console.log(x); // 5 
*/

/* En el primer console.log, x es undefined porque la declaración var x se eleva 
al principio del scope, pero la asignación (x = 5) ocurre después del console.log.
En el segundo console.log, x ya tiene el valor 5 porque la asignación ha ocurrido. */

/* segundo ejemplo */

/*
 greet(); // "Hello!"

function greet() {
  console.log("Hello!");
} 
*/

/* En este caso, la declaración de la función greet se eleva por completo, 
por lo que puedes llamarla antes de su definición en el código. */

/* 
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10; 
*/

/*
let y const no permiten acceder a la variable antes de que se haya declarado.
 Si intentas hacerlo, obtendrás un ReferenceError.
*/

/* 
console.log(z); // undefined
var z = 10;
*/

/*
Solo la declaración var z se eleva, pero la asignación z = 10 no. Por eso, 
z es undefined cuando lo llamas antes de la asignación.
*/

let nombre = 'ho'
console.log(nombre)