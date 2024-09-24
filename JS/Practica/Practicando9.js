let cantNota = parseInt(prompt("Ingrese una cantidad de notas: "));
let s = 1;
let suma = 0;
let promedio = 0;

for (i = 0; i < cantNota; i++){
    let notas = parseInt(prompt("Ingrese las nota "+s+" :"));
    suma += notas
}

promedio = suma / cantNota;

alert("El promedio es: " + promedio);