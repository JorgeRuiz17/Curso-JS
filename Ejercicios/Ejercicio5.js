alert("INFORMACIÓN: Su contraseña debe tener al menos 8 caracteres, una letra mayúscula, un caracter especial y un número.")

function validarClave(pass){
    let valida = true;
    if (pass.length < 8)
        valida = false

    let tieneMayuscula = /[A-Z]/.test(pass); //conjunto de A a la Z en mayuscula
    let tieneNumero = /\d/.test(pass); //conjunto numerico
    let tieneCaracterEsp = /[!@#$%^&*()_+\[\]{};:<>,.?¿~]/.test(pass); //conjunto de caracteres}

    if (!tieneMayuscula || !tieneNumero || !tieneCaracterEsp){ //condicional si, posee o no los elementos de cada variable, || = o 
        valida = false; 
    }

    return valida
}


let pass = prompt("Ingrese una contraseña: ")
let resultado = validarClave(pass);

if(resultado){
    alert("Contraseña ingresada correctamente")
}else{
    alert("RECUERDE: La contraseña no es válida. Debe tener al menos 8 caracteres, una letra mayúscula y un número.")
}