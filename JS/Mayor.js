function encontrarMayor(a , b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c){
        return b;
    } else {
        return c;
    }
}

console.log("El mayor es: " + encontrarMayor(5, 10, 7));