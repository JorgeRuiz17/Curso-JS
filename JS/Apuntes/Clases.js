class animal {

}

const perro = new animal;

class NombreDeLaClase {
    constructor(parametros){

    }
    metodo(){

    }
}
//Definicion de clase 
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre; //inicializa la propiedad nombre
        this.edad = edad; //inicializa la propiedad edad
    }

    presentarse(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`) //metodo para presentar a la persona
    }
}
//crear una instancia de la clase Persona
let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("Maria", 25);
//usar el metodo de la clase
persona1.presentarse(); //Salida: Hola, soy Juan y tengo 30 años
persona2.presentarse();