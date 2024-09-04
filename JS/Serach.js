function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Elemento encontrado, retorna el índice
        }
    }
    return -1; // Elemento no encontrado
}

let array = [10, 23, 45, 70, 11, 15];
console.log(linearSearch(array, 70)); // 3
console.log(linearSearch(array, 100)); // -1
