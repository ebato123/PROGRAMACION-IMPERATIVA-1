const prompt = require("prompt-sync")({ sigint: true });

// 1).

// INDICE es menor a LENGTH siempre. Esta función te devuelve
// el LENGTH de la misma y lo busca en ese INDICE, pero como 
// es mayor, ese indice no existe y resulta en undefined.

// let numbers =[22, 33]
// console.log(numbers[2])

// numbers.length = 2;

// indice = 1;
// lenght = 2;

// // 2).

// // Debería mostrar Ironman en la consola.

// let grupoDeAmigos = ["Harry", "Ron", "Hermione", "Spiderman", "Hulk",
// "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán"]
// console.log(grupoDeAmigos[5])

// 3).

// Debería devolver "un string cualquiera" porque es el último 
// elemento del array, y le pedis que busque en el indice 8, el
// cual no existe. 


// let str = "un string cualquiera"
// let arrayAleatorio = ["Digital", "House", "true", "string", "123","false", "54", str]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])

// COLECCIONES DE PELÍCULAS

// 1) 

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// function pasarAMayusc(array){
// 	let resultado = array.toUpperCase();
// 	return resultado;
// }

function pasarAMayusc(array){
	let resultado = [];
	for ( let i = 0; i < array.length; i++){
		resultado.push(array.toUpperCase());
		
	}
	return resultado;
}

console.log(pasarAMayusc(peliculas))

