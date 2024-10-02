class Cadena {  //clase cadena
    constructor(texto) {  //atributo
        this.texto = texto; //inicializa texto
    }

    contarCaracteres(){ //metodo
        return this.texto.lenght; // devuelve el tamaño de lo que contiene texto
    }
}

let entrada = prompt("ingrese una palabra u oración: "); //ingreso del texto en la variable declarada entrada

let cadena = new Cadena(entrada); //se crea una instancia cadena de la clase Cadena con lo que se ingrese en la variable entrada

let cantidadCaracteres = cadena.contarCaracteres; //se declara 

alert("La cadena '" + cadena.texto + "' contiene la siguiente cantidad de caracteres " + cantidadCaracteres);