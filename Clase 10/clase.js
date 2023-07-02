const prompt = require("prompt-sync")({ sigint: true });

// 1).

// INDICE es menor a LENGTH siempre. Esta función te devuelve
// el LENGTH de la misma y lo busca en ese INDICE, pero como 
// es mayor, ese indice no existe y resulta en undefined.

// let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])

// ES DECIR:

// console.log(numbers[5])

// ultimoIndice = 4;
// numbers.length = 5;

// // 2).

// // Debería mostrar Ironman en la consola.

// let grupoDeAmigos = ["Harry", "Ron", "Hermione", "Spiderman", "Hulk",
// "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán"]
// console.log(grupoDeAmigos[5])

// 3).

// Debería devolver "un string cualquiera" porque es el último 
// elemento del array, y le pedis que busque en el indice 8 - 1 (7).

// let str = "un string cualquiera"
// let arrayAleatorio = ["Digital", "House", "true", "string", "123","false", "54", str]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])

// COLECCIONES DE PELÍCULAS

// 1) 

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// 2)

// function peliculasEnMayusculas(array){
// 	let arrayEnMayusc = [];
// 	for(let i = 0; i < array.length ; i++){
// 		arrayEnMayusc.push(array[i].toUpperCase())
// 	}	
// 	return arrayEnMayusc;
// }

// console.log(peliculasEnMayusculas(peliculas))

// 3) y 4))

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// function agregarPeliculas(array1, array2){
// 	let nuevoArray = [];
// 	for(let i = 0; i < array1.length ; i++){
// 		nuevoArray.push(array1[i].toUpperCase())
// 	}	
// 	let elementoEliminado = array2.pop();
// 	for(let i = 0; i < array2.length ; i++){
// 		nuevoArray.push(array2[i].toUpperCase())
// 	}
// 	return nuevoArray;
// }

// console.log(agregarPeliculas(peliculas, peliculasAnimadas))

// 5)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// function compararCalificaciones(array1, array2){
// 	let comparacionCalificaciones = [];
// 	for(let i = 0; i < array2.length ; i++){
// 		if(array1[i] === array2[i]){
// 			comparacionCalificaciones.push("IGUAL");
// 		}
// 		else{
// 			comparacionCalificaciones.push("DIFERENTE");
// 		}
// 	}
// 	return comparacionCalificaciones;
// }

// console.log(compararCalificaciones(asiaScores, euroScores))

// EXTRA BONUS
// Array Inverso
// 1)

// function imprimirInverso(array){
// 	for(let i = (array.length - 1); i > -1; i--){
// 		console.log(array[i]);
// 	}
// }

// console.log(imprimirInverso(peliculas))

// 2)

// function invertirElementos(array){
// 	let arrayInvertido = [];
// 	for(let i = 0; i < array.length ; i++){
// 		arrayInvertido.unshift(array[i]);
// 	}
// 	return arrayInvertido
// }

// console.log(invertirElementos(peliculas))

//sumaArray()

// function sumArray(array){
// 	let resultado = 0;
// 	if(array.length === 3){
// 		for(let numero of array){
// 			resultado += numero;
// 		}
// 	}else{resultado = "ERROR: Ingrese un array que contenga 3 elementos."}
// 	return resultado;
// }

// console.log(sumArray([1,2,3]))
// console.log(sumArray([10, 3, 10]))
// console.log(sumArray([-5,100, 19]))

// Simulación Array.join()

// function join(array){
// 	let palabra = "";
// 	for(let letra of array){
// 		palabra += letra;
// 	}
// 	return palabra;
// }

// console.log(join(["h","o","l","a"]));
// console.log(join(["c","h","a","u"]));