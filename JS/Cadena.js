function revertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

let texto = "JavaScript";
let textoRevertido = revertirCadena(texto);
console.log("Texto revertido: " + textoRevertido);