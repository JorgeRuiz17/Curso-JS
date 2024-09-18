let palabra = prompt("Ingrese una palabra: ").toLowerCase(); // permite cambiar string a minusculas
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;


for (let i = 0; i < palabra.length; i++) { //se recorre el tamaño de la palabra(lenght), con el contardor i
    let letra = palabra[i];
    
    if (letra === 'a') {
        contadorA++;
    } else if (letra === 'e') {
        contadorE++;
    } else if (letra === 'i') {
        contadorI++;
    } else if (letra === 'o') {
        contadorO++;
    } else if (letra === 'u') {
        contadorU++;
    }
}


alert("Número de 'a': " + contadorA);
alert("Número de 'e': " + contadorE);
alert("Número de 'i': " + contadorI);
alert("Número de 'o': " + contadorO);
alert("Número de 'u': " + contadorU);
