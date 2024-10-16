class Trabajador {
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    mostrarResultado(){
        alert(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo}`);
    }
}

class Gerente extends Trabajador { 
    constructor(nombre, sueldo, departamento){
        super (nombre, sueldo); // hacemos referencia al clase Trabajador
        this.departamento = departamento; //Adicionamos departamento
    }

    mostrarResultado(){
        alert(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo}, Departamento: ${this.departamento}`)
    }
}

let trabajador1 = new Trabajador("Maria Joaquino", 499500);
let trabajador2 = new Trabajador("Maria Jose", 503990);
let trabajador3 = new Trabajador("Jose Maria", 537990);

let gerente1 = new Gerente("Federick Papadopoulus", 3500567, "Finanzas");
let gerente2 = new Gerente("Hemirich Perinovic", 2900567, "Recursos Humanos");
let gerente3 = new Gerente("Amari Sterling", 7700567, "Ventas");

trabajador1.mostrarResultado();
trabajador2.mostrarResultado();
trabajador3.mostrarResultado();

gerente1.mostrarResultado();
gerente2.mostrarResultado();
gerente3.mostrarResultado();