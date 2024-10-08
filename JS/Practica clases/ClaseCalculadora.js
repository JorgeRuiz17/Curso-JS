
class Calculadora {

    sumar(a, b){
        return a + b;
    }

    restar(a, b){
        return a - b;
    }

    multiplicar(a, b){
        return a * b;
    }

    dividir(a, b){
        if (b === 0){
            return "Error; Division por cero no permitida"
        }
        return a/b;
    }
}

let calculadora = new Calculadora();

let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));

alert("Suma: " + calculadora.sumar(num1, num2));
alert("Resta: " + calculadora.restar(num1, num2));
alert("Multiplicación: " + calculadora.multiplicar(num1, num2));
alert("Divicion: " + calculadora.dividir(num1, num2));