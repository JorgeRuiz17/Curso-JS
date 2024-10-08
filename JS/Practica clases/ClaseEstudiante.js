
class Estudiante{

    constructor(nombre){
        this.nombre = nombre;
        this.notas = [];
    }

    agregarNota(nota){
        this.notas.push(nota);
    }

    calcularPromedio(){
        if (this.notas.length === 0){
            return 0; //Retorna 0 si no hay notas
        }
        let suma = this.notas.reduce((acumulador, actual) => acumulador + actual, 0);
        return suma / this.notas.length;
    }

    mostrarInfo(){
        let promedio = this.calcularPromedio();
        alert(`Estudiante: ${this.nombre}, Promedio: ${promedio.toFixed(2)}`);
    }
}

let nombreEstudiante = prompt("Ingrese el nombre del estudiante: ");

let estudiante = new Estudiante(nombreEstudiante);

let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas: "));

for (let i = 0; i < cantidadNotas; i++){
    let nota = parseFloat(prompt(`Ingrese notas ${i + 1}: `))
    estudiante.agregarNota(nota);
}

estudiante.mostrarInfo();