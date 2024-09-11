function esPar(numero) {
    if (numero % 2 === 0){
        return "El numero " + numero + " es par.";
    } else {
        return "El numero " + numero + " es impar.";
    }
}

console.log(esPar(4));
console.log(esPar(7));