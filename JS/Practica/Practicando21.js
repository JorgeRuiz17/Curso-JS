
function pagoTurno (turno){
    if (turno === "diurno"){
        return 12000;
    } else if (turno === "nocturno"){
        return 14000;
    } else {
        alert("Turno inválido. Por favor, ingrese 'diurno' o 'nocturno'.");
        return null;
    }
}

turno = prompt("Ingrese el turno 'diurno' o 'nocturno': ")
let resultado = pagoTurno(turno);

if (turno !== null){
    alert("El pago por hora para el turno " + turno + " es: " + resultado + " CLP");
}