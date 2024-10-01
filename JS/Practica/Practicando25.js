const num = [];

let elemento = parseInt(prompt("Ingrese un elemento a buscar: "));

for (let i = 0; i < 4; i++){
    let numeros = parseInt(prompt("Ingrese los numeros del array: ")); 
    num.push(numeros)
}

function elementoEnc(num, elemento){
    for (let i = 0; i < num.length; i++) {
        if (num[i] === elemento) {
            return true; // Retorna true si el elemento se encuentra
        }
    }
    return false; //
}

let resultado = elementoEnc(num, elemento);
if (resultado){
    alert("El elemento ha sido encontrado en el array")
}else{
    alert("El elemento no ha sido encontrado en el array")
}