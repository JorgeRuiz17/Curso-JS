// conversion de celsius a grados farenheit con funcion
function celciusFarenheit(grado){
    return (grado * 9/5) +32; 
}

let grado = parseFloat(prompt("Ingrese los grados celsius: "));
let conversion = celciusFarenheit(grado);

alert("los grados " + grado + " convertidos a farenheit son: " + conversion);