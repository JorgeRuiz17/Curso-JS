
function calcularArea(radio){
    let area = Math.PI * Math.pow(radio, 2);

    return area;
}

radio = parseFloat(prompt("Ingrese el radio de la circunferencia: "));
let calculo = calcularArea(radio);

alert("El area de la circunferencia es: " + calculo.toFixed(2));