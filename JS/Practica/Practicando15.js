//Función para Calcular el Perímetro de un Rectángulo

function perimetro (largo, ancho){
    return 2 * (largo + ancho);
}

let largo = parseFloat(prompt("Ingrese el largo: "));
let ancho = parseFloat(prompt("Ingrese el ancho: "));

let resultado = perimetro(largo, ancho);
alert("El perimetro es: " + resultado);