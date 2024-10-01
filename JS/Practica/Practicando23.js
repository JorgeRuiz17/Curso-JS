const tarifas = []; //agregamos un array vacio

let cantidad = parseInt(prompt("Ingrese cuantas tarifas ingresara: "));

for (let i = 0; i < cantidad; i++){ //ciclo for para pedir las tarifas hasta la cantidad pedida
    let tarifa = parseFloat(prompt("Ingrese la tarifa "+ (i + 1) +" :"));
    tarifas.push(tarifa); //empuja los valores ingresados en la variable tarifa a la constante tarifas (array)
}

function sumarTarifas(tarifas){ //funcion que tiene como elemento tarifas
    let total = 0;
    for (let i = 0; i < tarifas.length; i++){ //i menos la cantidad de elementos dentro del array
        total += tarifas[i] //los valores dentro de tarifas segun su posicion se van sumando al total
    }
    return total;
}

let resultado = sumarTarifas(tarifas);

alert("La suma de las tarifas ingresadas son: " + resultado);