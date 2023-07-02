const prompt = require("prompt-sync")({ sigint: true });

// AGREGÁ CAMINOS
// let edad = 21 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

// if(edad < 0){
// 	console.log("Error, edad inválida. Por favor ingrese un número válido.")
// }else if(edad % 2 != 0){
// 	console.log("¿Sabías que tu edad es impar?")
// 	if(edad < 18) {
// 		console.log("No puede pasar al bar.")
// 		} else if (edad < 21){
// 			console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// 		} else if (edad == 21){
// 			console.log("Puede pasar al bar y tomar alcohol.")
// 			console.log("Felicitaciones por su edad!")
// 		} else {
// 			console.log("Puede pasar al bar y tomar alcohol.")
// 		}
// }else if(edad < 18) {
// 	console.log("No puede pasar al bar.")
// 	} else if (edad < 21){
// 		console.log("Puede pasar al bar, pero no puede tomar alcohol.")
// 	} else if (edad == 21){
// 		console.log("Puede pasar al bar y tomar alcohol.")
// 		console.log("Felicitaciones por su edad!")
// 	} else {
// 		console.log("Puede pasar al bar y tomar alcohol.")
// 	}

// totalAPagar()

// function calcularTotalAPagar(tipoVehiculo, litrosConsumidos) {
// 	let precioPorLitro = 0;
  
// 	switch (tipoVehiculo) {
// 	  case "coche":
// 		precioPorLitro = 86;
// 		break;
// 	  case "moto":
// 		precioPorLitro = 70;
// 		break;
// 	  case "autobús":
// 		precioPorLitro = 55;
// 		break;
// 	  default:
// 		console.log("Tipo de vehículo no válido");
// 		return null;
// 	}
  
// 	let totalAPagar = litrosConsumidos * precioPorLitro;
  
// 	if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
// 	  totalAPagar += 50;
// 	} else if (litrosConsumidos > 25) {
// 	  totalAPagar += 25;
// 	}
  
// 	return totalAPagar;
//   }
  
//   console.log(calcularTotalAPagar("coche", 2))

// LOCAL DE SANDWICHES

// function localDeSandwiches(sandwichBase, tipoDePan, adicionalQueso, adicionalTomate, adicionalLechuga, adicionalCebolla, adicionalMayonesa, adicionalMostaza){
// 	let precioFinal = 0;

// 	switch(sandwichBase){
// 		case "pollo":
// 			precioFinal += 150;
// 			break;
// 		case "carne":
// 			precioFinal += 200;
// 			break;
// 		case "veggie":
// 			precioFinal += 100;
// 			break;
// 		default:
// 			return "Ingrese un tipo de Sándwich válido, porfavor.";
// 		}

// 	switch(tipoDePan){
// 		case "blanco":
// 			precioFinal += 50;
// 			break;
// 		case "negro":
// 			precioFinal += 60;
// 			break;
// 		case "s/gluten":
// 			precioFinal += 75;
// 			break;
// 		default:
// 			return "Ingrese un tipo de Pan válido, porfavor.";
// 		}	

// 	adicionalQueso == true?precioFinal += 20: 0;
// 	adicionalTomate == true?precioFinal += 15: 0;
// 	adicionalLechuga == true?precioFinal += 10: 0;
// 	adicionalCebolla == true?precioFinal += 15: 0;
// 	adicionalMayonesa == true?precioFinal += 5: 0;
// 	adicionalMostaza == true?precioFinal += 5: 0;

// 	return "Su total es de $" + precioFinal;
// }

// console.log("¿Qué tipo de Sándwich quiere?")
// console.log("OPCIONES: pollo($150), carne($200), veggie($100)")
// console.log("")
// sandwichBase = prompt("- ");
// console.log("¿Qué tipo de Pan quiere?")
// console.log("OPCIONES: blanco($50), negro(60$), s/gluten(75$)")
// console.log("")
// tipoDePan = prompt("- ");
// console.log("ADICIONALES");

// console.log("¿Quiere agregarle Queso(20$)?")
// console.log("");
// adicionalQueso = prompt("- ");
// adicionalQueso === ("si" || "Si" || "SI" || "SÍ")? adicionalQueso = true : false;

// console.log("¿Quiere agregarle Tomate(15$)?");
// console.log("");
// adicionalTomate = prompt("- ");
// adicionalTomate === ("si" || "Si" || "SI" || "SÍ")? adicionalTomate = true : false;

// console.log("¿Quiere agregarle Lechuga(10$)?");
// console.log("");
// adicionalLechuga = prompt("- ");
// adicionalLechuga === ("si" || "Si" || "SI" || "SÍ")? adicionalLechuga = true : false;

// console.log("¿Quiere agregarle Cebolla(15$)?");
// console.log("");
// adicionalCebolla = prompt("- ");
// adicionalCebolla === ("si" || "Si" || "SI" || "SÍ")? adicionalCebolla = true : false;

// console.log("¿Quiere agregarle Mayonesa(5$)?");
// console.log("");
// adicionalMayonesa = prompt("- ");
// adicionalMayonesa === ("si" || "Si" || "SI" || "SÍ")? adicionalMayonesa = true : false;

// console.log("¿Quiere agregarle Mostaza(5$)?");
// console.log("");
// adicionalMostaza = prompt("- ");
// adicionalMostaza === ("si" || "Si" || "SI" || "SÍ")? adicionalMostaza = true : false;


// console.log(localDeSandwiches(sandwichBase, tipoDePan, adicionalQueso, adicionalTomate, adicionalLechuga, adicionalCebolla, adicionalMayonesa, adicionalMostaza))

// ¡EXTRA BONUS!
// ¿CUAL ES EL NÚMERO SECRETO?

// function numeroSecreto(numero){
// 	let numeroSecretoVar = (Math.random()).toFixed(1) * 10;
// 	if (numero === numeroSecretoVar){
// 		return "¡Correcto! El número secreto es: " + numero;
// 	}
// 	else {
// 		return "¡Casi! Sigue intentando. " + "El número ingresado fue el " + numero + " y el número secreto fue el " + numeroSecretoVar + "."
//     }
// }

// console.log(numeroSecreto(9))

// ABRIR PARACAÍDAS

// function abrirParacaidas(velocidad, altura){
// 	if(velocidad < 1000 && altura >= 2000 && altura < 3000){
// 		return "El paracaídas DEBE abrirse.";
// 	}else{ 
// 		return "El paracaídas NO DEBE abrirse"}
// }

// console.log(abrirParacaidas())

// ESTRUCTURA SWITCH
// TRADUCTOR CONDICIONAL

// function traductorCondicional(palabra){
// 	switch(palabra){
// 		case "perro":
// 			return "dog";
// 			break;
// 		case "pelota":
// 			return "ball";
// 			break;
// 		case "árbol":
// 			return "tree";
// 			break;
// 		case "genio":
// 			return "genius";
// 			break;
// 		default: 
// 			return "La palabra ingresada es inválida.";
// 			break;
// 		}
// }

// console.log(traductorCondicional("árbol"))

// VALORACIÓN DE PELÍCULAS

// function valoracionPeliculas(){
// 	switch(valoracion){
// 		case "Muy mala":
// 			return "Lamento oír eso... Tus comentarios se tendrán en cuenta.";
// 			break;
// 		case "Mala":
// 			return "Lamento oír eso... Tus comentarios se tendrán en cuenta.";
// 			break;
// 		case "Mediocre":
// 			return "Lamento oír eso... Tus comentarios se tendrán en cuenta.";
// 			break;
// 		case "Buena":
// 			return "¡Genial! Tus comentarios se tendrán en cuenta.";
// 			break;
// 		case "Muy buena":
// 			return "¡Genial! Tus comentarios se tendrán en cuenta.";
// 			break;
// 		default:
// 			return "Ingresaste una respuesta inválida."
// 			break;
// 	}
// }

// console.log("¡Dinos qué te pareció la películas!");
// console.log("OPCIONES: Muy mala, Mala, Mediocre, Buena, Muy buena");
// console.log("")
// valoracion = prompt("Ingrese una respuesta: ");
// console.log("")
// console.log(valoracionPeliculas(valoracion))
// console.log("")