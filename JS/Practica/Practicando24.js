const num = [];

let cantidad = parseInt(prompt("Ingrese la cantidad de numeros a ingresar: "));

for(let i = 0; i < cantidad; i++){
    let numeros = parseFloat(prompt("Ingrese los numeros a promediar: "));
    num.push(numeros);
}

function promedio(num){
    let suma = 0;
    for( let i = 0; i < num.length; i++){
        suma += num[i];
        resultado = suma / cantidad;
    }
    return resultado;
}

let prom = promedio(num);
alert("El promedio de los numeros ingresados es: " + prom);