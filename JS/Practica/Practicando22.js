
const tarifas = [12000, 14000, 12000];

function sumarTarifas (tarifas){
    let total = 0;
    for (let i = 0; i < tarifas.length; i++){
        total += tarifas[i]
    }

    return total
}

let totalTarifas = sumarTarifas(tarifas);

alert("El total de tarifas es: " + totalTarifas + " CLP");