//Par o impar
let numero = parseInt(prompt("Ingrese un numero:")); //ingresar numero por pantalla

// verificacion de par o impar
if (numero % 2 === 0) {
    console.log(numero + " Es un numero par.");
} else {
    console.log(numero + " Es un numero impar.");
}

//parseInt cadena a entero
//prompt ventana emergente para ingresar dato
//% devuelve el resto de la division, si es 0 es par si no impar