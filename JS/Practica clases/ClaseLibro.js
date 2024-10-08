
class libro {
    constructor(titulo, autor, añoPublicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;
    }

    mostrarInfo(){
        alert(`El libro ${this.titulo} del autor ${this.autor} publicado en el año ${this.añoPublicacion} esta agotado`)
    }
}

let libro1 = new libro ("Harry Potter y el prisionera de azkaban", "J. K. Rowling", 1999)
let libro2 = new libro ("Game of thrones", "George R. R. Martin", 1996)

libro1.mostrarInfo();
libro2.mostrarInfo();