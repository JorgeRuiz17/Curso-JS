// kilometros a millas

function kiloAmillas (kilometros){
    return kilometros * 0,621371;
}

let kilometros = parseFloat(prompt("Ingrese la cantidad de kilometros a convertir: "));
let conversion = kiloAmillas(kilometros);
alert("Los "+ kilometros + " convertidos a millas son: "+ conversion);
