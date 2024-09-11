let suma1 = 500;
let suma2 = 456;
let total = 0;

while (suma1 <= 800){
    total += suma1 + suma2;
    suma1 += 10;
    suma2 -= 2;
}

alert("El resultado es: " + total);
alert("suma 1 es: " + suma1);
alert("suma 2 es: " + suma2);
console.log("total: " + total)
console.log("total suma: " + suma1)
console.log("total resta: " + suma2)