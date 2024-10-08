
class persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo(){
        alert(`Señor/a: ${this.nombre } su edad es: ${this.edad}`);
    }
}

let persona1 = new persona("Franco", 25);
let persona2 = new persona("Beatriz", 24);
let persona3 = new persona("Benja", 24);

persona1.mostrarInfo();
persona2.mostrarInfo();
persona3.mostrarInfo();