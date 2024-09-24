//factorial

function factorial (num){
    let resultado = 1;
    for (let i = 1; i <= num; i++){
        resultado *= i; 
    }
    return resultado; 
}

let num = parseInt(prompt("Ingrese un numero para calcular su factorial: "));
resultado = factorial(num)

alert("El factorial es: "+ resultado);