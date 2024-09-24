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

// TIPOS DE DATOS

//Numeros
let edad = 29;
let sueldo = 20000000;
const PI = 2.14;

//Infinity
console.log(edad / 0);

//Object
let users = {
    name : "Jorge",
    age : 25,
    city : "Castro",
    "Correo electronico": "jorgeruiz@gmail.com" //se puede agregar clave con espacio pero con comillas
}

users.pais = "Chile"; //forma para agregar una clave y su contenido
users.genero = "Masculino"; 
users.estado = true; //clave con booleano

console.log(users["Correo electronico"]); //llamar una sola clave especifica de dos palabras

delete users.estado; //eliminar una clave especifica

console.log(typeof nombre); //saber un tipo de variable especifico

//TRASNFORMAR UN NUMBRE A STRING

edad=String(edad);

//CONDICIONAL

//CICLOS WHILE Y DO-WHILE