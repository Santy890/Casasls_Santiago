let dato, resultado; // se declara lo que seria las variables (dato y resultado)

    val1 = window.prompt("Introduce tu nombre", " "); // se le pide al usuario que ponga su nombre y lo que hace esto es darle un valor a val1

    val2 = window.prompt("Introduce tu apellido", "     "); // se le pide al usuario que ponga su nombre y lo que hace esto es darle un valor a val2

    resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} `; // se junta el nombre y apellido dandole valor a la variable "resultado"

    document.write(resultado); // Escribe el nombre y apellido en el html

