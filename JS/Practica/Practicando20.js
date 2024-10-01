
function pago (horas, tarifa){
    let sueldo = horas * tarifa
    return sueldo
}

let horas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas: "));
const tarifa = 12000;

let resultado = pago(horas, tarifa);
alert("El sueldo por las horas trabajadas (" + horas + ") es: " + resultado);