
var val = [true, false, 2, "hola", "mundo", 3, "char"];

var tex = val.filter(item => typeof item === 'string');

var mayorTex = tex.reduce((a, b) => a.length > b.length ? a : b);

var texOrde = tex.sort((a, b) => a.length - b.length);
    document.write("<p>Elementos de texto ordenados de menor a mayor cantidad de letras: " + texOrde.join(", ") + "</p>");

var num = val.filter(item => typeof item === 'num');

var suma = num[0] + num[1];
var resta = num[0] - num[1];
var mult = num[0] * num[1];
var div = num[0] / num[1];

document.write("<p>Suma: " + suma + "</p>");
document.write("<p>Resta: " + resta + "</p>");
document.write("<p>Multiplicación: " + mult + "</p>");
document.write("<p>División: " + div + "</p>");
