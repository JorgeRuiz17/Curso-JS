function contarPalabra(cadena){
    return cadena.trim().split(/\s+/).length;
}

let texto = prompt("Ingrese una oración: ");
alert("El numero de palabras es: " + contarPalabra(texto));
