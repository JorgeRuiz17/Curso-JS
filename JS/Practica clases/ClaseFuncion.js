// Definición de la clase Rectangulo
class Rectangulo {
    constructor(largo, ancho) {
        this.largo = largo; // Propiedad largo
        this.ancho = ancho; // Propiedad ancho
    }

    // Método para calcular el área
    calcularArea() {
        return this.largo * this.ancho; // Área = largo * ancho
    }

    // Método para calcular el perímetro
    calcularPerimetro() {
        return 2 * (this.largo + this.ancho); // Perímetro = 2 * (largo + ancho)
    }
}

// Crear una instancia de la clase Rectangulo
let rectangulo1 = new Rectangulo(5, 10);

// Usar los métodos de la clase
console.log(`Área: ${rectangulo1.calcularArea()}`); // Salida: Área: 50
console.log(`Perímetro: ${rectangulo1.calcularPerimetro()}`); // Salida: Perímetro: 30