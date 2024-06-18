function solicitarNota(indice) {
    let nota;
    do {
        nota = parseInt(window.prompt(`Introduce la nota ${indice + 1} :`, ""));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

let notas = [];

for (let i = 0; i < 5; i++) {
    notas.push(solicitarNota(i));
}

let suma = notas.reduce((acc, curr) => acc + curr, 0);
let prom = suma / notas.length;

let resul;
if (prom < 5) {
    resul = "Desaprobado";
} else if (prom >= 6 && prom <= 8) {
    resul = "Aprobado";
} else if (prom > 8) {
    resul = "Re bien";
}

document.write(`<p>Las notas ingresadas son: ${notas.join(", ")}</p>`);
document.write(`<p>El promedio es: ${prom.toFixed(2)}</p>`);
document.write(`<p>El Resultado es: ${resul}</p>`);