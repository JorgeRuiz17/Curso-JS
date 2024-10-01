// Tarifas por hora
const tarifaDiurno = 12000;
const tarifaNocturno = 16000;
const incrementoDiurnoDomingo = 2000;
const incrementoNocturnoDomingo = 3000;

// Definición de tarifas
const empleados = [  // Se declara un array que contiene objetos, donde cada objeto representa a un empleado
    {
        nombre: "Empleado 1",
        horario: { lunes: "nocturno", martes: "nocturno", miercoles: "nocturno", jueves: "diurno", viernes: "diurno" }, //Un objeto que mapea los días de la semana a su respectivo turno
    },
    {
        nombre: "Empleado 2",
        horario: { martes: "nocturno", miercoles: "nocturno", jueves: "nocturno", domingo: "diurno" },
    },
    {
        nombre: "Empleado 3",
        horario: { miercoles: "diurno", jueves: "diurno", viernes: "diurno", sabado: "nocturno", domingo: "nocturno" },
    },
];

// Función para calcular el pago diario
function calcularPago(turno, esDomingo = false) {
    let tarifa = 0;

    if (turno === "diurno") {
        tarifa = esDomingo ? tarifaDiurno + incrementoDiurnoDomingo : tarifaDiurno;
    } else if (turno === "nocturno") {
        tarifa = esDomingo ? tarifaNocturno + incrementoNocturnoDomingo : tarifaNocturno;
    }

    return tarifa * 10; // 10 horas de trabajo por día
}

// Calculo de pagos
empleados.forEach((empleado) => {
    let totalSemanal = 0;
    let pagosDiarios = {};

    for (let dia in empleado.horario) {
        let turno = empleado.horario[dia];
        let esDomingo = dia === "domingo";
        let pagoDiario = calcularPago(turno, esDomingo);
        pagosDiarios[dia] = pagoDiario;
        totalSemanal += pagoDiario;
    }

    empleado.pagosDiarios = pagosDiarios;
    empleado.totalSemanal = totalSemanal;
});

// Informacion de cada empleado
empleados.forEach((empleado) => {
    console.log(empleado.nombre);
    console.log("Pagos diarios: ", empleado.pagosDiarios);
    console.log("Total semanal: ", empleado.totalSemanal + " CLP");
    console.log("----------");
});
