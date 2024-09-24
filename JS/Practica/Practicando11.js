let pass = prompt("Ingrese una contraseña: ")

let esValida = true;
if (pass.length < 8){
    esValida = false;
}

let tieneMayuscula = /[A-Z]/.test(pass); // /    / = conjunto de valores, A-Z CPNJUNTO del cual se buscara, test = busca en la variable si hay una cosa que se especifique en el conjunto y devuelve un true o false.
let tieneMinuscula = /[a-z]/.test(pass);
let tieneNumero = /\d/.test(pass);

if (!tieneMayuscula || !tieneMinuscula || !tieneNumero){
    esValida = false; 
}

if (esValida){
    alert("La contraseña es válida.");
} else {
    alert("La contraseña no es válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.");
}
