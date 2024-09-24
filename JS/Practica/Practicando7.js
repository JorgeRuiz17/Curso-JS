let palabra = prompt("Ingrese una palabra:").toLowerCase();
let contador = 0;

for(let i = 0; i < palabra.length; i++){
    let letra = palabra [i];

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        contador++;
    }
}

alert("Las vocales de la palabra "+palabra+" son: "+contador);