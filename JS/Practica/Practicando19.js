let palabra = prompt("Ingrese una palabra: ").toLowerCase();

function contarVocales(palabra) {
    let conteo = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];

        if (letra === "a") {
            conteo.a++;
        } else if (letra === "e") {
            conteo.e++;
        } else if (letra === "i") {
            conteo.i++;
        } else if (letra === "o") {
            conteo.o++;
        } else if (letra === "u") {
            conteo.u++;
        }
    }

    return conteo; // Retorna el objeto con el conteo de vocales
}

let resultado = contarVocales(palabra); // Llama la función una vez

alert("Las vocales a en la palabra son: " + resultado.a);
alert("Las vocales e en la palabra son: " + resultado.e);
alert("Las vocales i en la palabra son: " + resultado.i);
alert("Las vocales o en la palabra son: " + resultado.o);
alert("Las vocales u en la palabra son: " + resultado.u);
