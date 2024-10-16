function calcularAreaCirculo(radio){
    return Math.PI * Math.pow(radio, 2); //área = PI*radio^2
}

function calcularAreaTriangulo(base, altura){
    return (base * altura) /2; 
}

function calcularAreaRectandulo(base, altura){
    return base * altura;
}

let figura = prompt("Elija una figura (circulo, triangulo o rectangulo)") // se almacena uno de las tres formas

let area; //Variable para almacenar el resultado de la funcion requerida

if (figura === "circulo"){ //se compara con lo guardado en la variable figura para escoger que operacion hacer
    let radio = parseFloat(prompt("Ingrese el radio para calcular el área: "));
    area = calcularAreaCirculo(radio);
    alert("El área calculada es: " + area.toFixed(3));
} else if (figura === "triangulo"){
    let base = parseFloat(prompt("Ingrese la base del triangulo: "));
    let altura = parseFloat(prompt("Ingrese la altura del triangulo: "));
    area = calcularAreaTriangulo(base, altura);
    alert("El área del triangulo es: " + area.toFixed(3));
} else if (figura === "rectangulo"){
    let base = parseFloat(prompt("Ingrese la base del rectangulo: "));
    let altura = parseFloat(prompt("Ingrese la altura del rectangulo: "));
    area = calcularAreaRectandulo(base, altura);
    alert("El area del rectangulo es: " + area.toFixed(3));
} else {
    alert("Ingrese una figura valida, recuerde debe ser 'circulo', 'triangulo', 'rectangulo'."); //en caso de escribir otra figura o escribir mal
}