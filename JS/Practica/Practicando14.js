//generador de numeros aleatorios
let rango = parseInt(prompt("Ingrese el rango inicial: "));
let rango2 = parseInt(prompt("Ingrese el rango final: "));

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Genera un número aleatorio entre min y max
}

let numeroAleatorio = generarNumeroAleatorio(rango, rango2);
alert("Número aleatorio generado entre " + rango + " y " + rango2 + ": " + numeroAleatorio);


// El Math.floor()método estático siempre redondea hacia abajo y devuelve el entero más grande menor o igual a un número dado.