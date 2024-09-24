//Practica N°1
let num = parseInt(prompt("Ingrese un número del 1 al 10:")); // Convertimos a número

if (num >= 1 && num <= 10) { // Verificamos que el número esté dentro del rango
    let esPrimo = true; // Asumimos que es primo

    if (num < 2) {
        esPrimo = false; // 0 y 1 no son primos
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) { // Si es divisible por algún número entre 2 y num-1
                esPrimo = false; // No es primo
                break; // Salimos del bucle
            }
        }
    }

    if (esPrimo) {
        console.log("El número ingresado es primo");
    } else {
        console.log("El número ingresado no es primo");
    }
} else {
    console.log("Por favor, ingrese un número válido entre 1 y 10.");
}
