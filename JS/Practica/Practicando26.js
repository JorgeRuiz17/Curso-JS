const elementos = [];

let cantidad = parseInt(prompt("Ingrese la cantidad de elementos: "));

for (let i = 0; i < cantidad; i++){
    let eleIngresados = parseFloat(prompt("Ingrese los elementos: "));
    elementos.push(eleIngresados);
}
//Forma para encntrar un elemento dentro de un array, numero o texto dependiendo de como se ingrese
if (elementos.includes(4)){
    alert("El elemento '4' ha sido encontrado: ")
}else{
    alert("El elemento '4' no ha sido encontrado: ")
}
