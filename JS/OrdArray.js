function ordenarArray(arr){
    return arr.sort(function(a, b) { return a - b});
}

let numeros = [5, 3, 8, 2, 4, 7, 9, 1];
console.log("Array ordenado: " + ordenarArray(numeros));