class Producto{ //clase producto
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDetalle(){
        alert(`Producto: ${this.nombre}, Precio: $${this.precio.toFixed(3)}`); //metodo
    }
}

let producto1 = new Producto ("Skyrim, ultima ultima versión", 59.990); //instancias varias
let producto2 = new Producto ("Uncharted 4", 24.590);
let producto3 = new Producto ("Age of Empires 2, The rise kingdom", 37.990);
let producto4 = new Producto ("FC 35263562", 89.990);
let producto5 = new Producto ("Call of duty World at War", 56.990);
let producto6 = new Producto ("Predecessor", 0);
let producto7 = new Producto ("Apex Legends", 0);

producto1.mostrarDetalle(); //llamada al metodo segun la instancia
producto2.mostrarDetalle();
producto3.mostrarDetalle();
producto4.mostrarDetalle();
producto5.mostrarDetalle();
producto6.mostrarDetalle();
producto7.mostrarDetalle();