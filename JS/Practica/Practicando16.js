// funcion para saber si es par o impar

function parOimpar (num){
    if (num % 2 === 0){
        alert("El número "+ num + " es par");
    } else {
        alert("El número "+ num + " es impar");
    }
}

let num = parseInt(prompt("Ingrese un numero: "));
parOimpar(num);
