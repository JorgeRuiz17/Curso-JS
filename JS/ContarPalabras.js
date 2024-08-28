function contarPalabras(cadena){
    return cadena.trim().split(/\s+/).lenght;
}

let texto = "JavaScript es un lenguaje de programación.";
console.log("Número de palabras: " + contarPalabras(texto));