const array = [];

let cantidad = prompt("Ingrese la cantidad de nombres: ")

for(let i = 0; i < cantidad; i++){
    let nombres = prompt("Ingrese los nombres: ");
    array.push(nombres);
}

array.forEach((nombres) => {
    alert(nombres);
});