const arr = [];

let cantidadArray = prompt("Ingrese la cantidad de elementos del array: ");

for(let i = 0; i < cantidadArray; i++){
    let ingresos = prompt("Ingrese los elementos del array: ");
    arr.push(ingresos);
}

let tamaño = arr.length; 

alert("El tamaño del array es " + tamaño + " y contiene los siguientes elementos: " + arr)