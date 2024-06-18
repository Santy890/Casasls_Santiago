

    let texto = window.prompt("Introduce un texto:", "");

const vocales = ['a', 'e', 'i', 'o', 'u'];

let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        posicion = i;
        break;
    }
}

if (posicion !== -1) {
    document.write(`<p>La primera vocal en el texto es '${texto[posicion]}' y está en la posición Nº ${posicion + 1}.</p>`);
} else {
    document.write("<p>No se encontraron vocales en el texto.</p>");
}
