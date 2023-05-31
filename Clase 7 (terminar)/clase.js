let edad; //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

function(edad) {
if(edad < 18) {
console.log("Error, edad inválida. Por favor ingrese un número válido.")
} else if (edad <= 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol. Felicidades por tu edad!")
} else if ((edad % 2) == 1) {
	console.log("¿Sabías que tu edad es impar?")
} else {
console.log("Puede pasar al bar y tomar alcohol.")
}
}