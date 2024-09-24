let cantidad = parseInt(prompt("Ingrese cuantos asteriscos desea imprimir:"));

let asteriscos = ""; //cadena vacia

for (let i = 0; i < cantidad; i++){
    asteriscos += "*";
}

alert(asteriscos);