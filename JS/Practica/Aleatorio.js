function generarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Número aleatorio entre 1 y 10: " + generarNumeroAleatorio(1, 10));