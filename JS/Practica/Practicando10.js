//let radio = parseFloat(prompt("Ingrese el radio de un circulo: "));

//let area = Math.PI * radio * 2;

//alert("El area del radio proporcionado es: " + area);

function calcularAreaCirculo(radio){
    return Math.PI * Math.pow(radio, 2);
}

let radio = parseFloat(prompt("Ingrese el radio del circulo a calcular: "));
let area = calcularAreaCirculo(radio);

alert("El área del círculo con radio " + radio + " es: " + area);