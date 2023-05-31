// DESAFÍO EXTRA
let cajonRemeras = "pantalones";
let cajonPantalones = "remeras";
let contenedor;

//Saco Pantalones del cajon de Remeras y lo dejo en Contenedor
contenedor = cajonRemeras;
//Lleno cajon de Remeras con las Remeras
cajonRemeras = cajonPantalones;
//Saco Pantalones del Contenedor y lo guardo en cajon de Pantalones
cajonPantalones = contenedor;

console.log("En el cajon de las remeras hay " + cajonRemeras + ".")
console.log("En el cajon de los pantalones hay " + cajonPantalones + ".")