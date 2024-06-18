
let Meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
let NumMes = parseInt(window.prompt("Introduce un número del 1 al 12 para obtener el mes con ese numero:", ""));

if (NumMes >= 1 && NumMes <= 12) {
    document.write(`El mes correspondiente al número ${NumMes} es ${Meses[NumMes - 1]}.`);
} else {
    document.write("introduzca un número válido desde el 1 hasta 12.");
}
