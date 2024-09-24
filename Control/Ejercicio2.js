alert("INFORMACIÓN: Su contraseña debe tener al menos 8 caracteres, una letra mayúscula, un caracter especial y un número.")
let pass = prompt("Ingrese una contraseña: ")

let Valida = true; // se toma como verdadero 
if (pass.length < 8){ // se revisa su longitud
    Valida = false; // si es menor se toma como valor false
}

let tieneMayuscula = /[A-Z]/.test(pass); //conjunto de A a la Z en mayuscula
let tieneNumero = /\d/.test(pass); //conjunto numerico
let tieneCaracterEsp = /[!@#$%^&*()_+\[\]{};:<>,.?¿~]/.test(pass); //conjunto de caracteres
                                           
if (!tieneMayuscula || !tieneNumero || !tieneCaracterEsp){ //condicional si, posee o no los elementos de cada variable, || = o 
    Valida = false; 
}

if (Valida){ //si la variable Valida llega en estado true, se imprime la contraseña es válida
    alert("La contraseña es válida.");
} else { //de lo contrario no es valida
    alert("RECUERDE: La contraseña no es válida. Debe tener al menos 8 caracteres, una letra mayúscula y un número.");
}
