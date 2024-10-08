
class Coche { //clase coche
    constructor(marca, modelo, año){ //constructor para inicializar propiedades
        this.marca = marca; //propiedad marca
        this.modelo = modelo; //propiedad modelo
        this.año = año; //propiedad año
    }

    mostrarInfo(){ //metodo para mostrar informacion del coche
        alert(`Coche: ${this.marca} ${this.modelo} ${this.año}`);
    }
}
//crear instancias de la clase coche
let coche1 = new Coche("Toyota", "Corolla", 2024);
let coche2 = new Coche("Mitsubishi", "Lancer Evolution", 2024);
//llamar al metodo para mostrar la informacion o instacias 
coche1.mostrarInfo();
coche2.mostrarInfo();