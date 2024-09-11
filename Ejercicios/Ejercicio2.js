//Promedio

let nota1 = parseFloat(prompt("Ingrese la primera nota (40%):")); //ingreso de notas por pantalla
let nota2 = parseFloat(prompt("Ingrese la segunda nota (30%):"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota (30%):"));

let promedio = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30); //se calcula el promedio según la el porcentaje

console.log("El promedio es: " + promedio.toFixed(2));

if (promedio < 3.95) {
    console.log("El estudiante ha reprobado la asignatura con un promedio de: " + promedio.toFixed(2));
    alert("El estudiante ha reprobado la asignatura con un promedio de: " + promedio.toFixed(2));
}else if (promedio >= 3.95 && promedio <= 4.94) {
    console.log("El estudiante va a examen con un primedio de: " + promedio.toFixed(2));
    alert("El estudiante va a examen con un primedio de: " + promedio.toFixed(2));
}else if (promedio > 4.94){
    console.log("El estudiante ha aprobado la asignatura con un promedio de: " + promedio.toFixed(2));
    alert("El estudiante ha aprobado la asignatura con un promedio de: " + promedio.toFixed(2));
}

//toFixed se muestra el promedio con dos decimales
//&& condicional y, los das condiciones deben ser verdaderas

//UTILIZAR OPERADOR TERNARIO