const fs = require('fs');

// Actividad 1)
const alicia = [40, 50, 60];
const bob = [60, 50, 40];

// Concurso = {
//   etapas: {},
//   ganador: "",
//   encontrarGanador : function(a, b){
//     let puntosA = 0;
//     let puntosB = 0;
//     for (let i = 0; i < a.length ; i++){
//       this.etapas.Alicia = a[i];
//       this.etapas.Bob = b[i];
//       if (a[i] > b[i]){
//         puntosA ++;
//       }else if (a[i] < b[i]){
//         puntosB ++;};
//       };
//     if(puntosA > puntosB){
//       this.ganador = "Alicia";
//     }else if(puntosA < puntosB){
//       this.ganador = "Bob";
//     }else{
//       this.ganador = "EMPATE";
//     };
//     return Concurso;
//   },
//   exportarResultados : function(nombreArchivo){
//     let resultados = {
//       etapas: this.etapas
//     };
//     const datosJSON = JSON.stringify(resultados);
//     fs.writeFile(nombreArchivo, datosJSON, (err) => {
//       if (err) {
//         console.error('Error al exportar los resultados:', err);
//       } else {
//         console.log('Resultados exportados exitosamente.');
//       }
//     });
//   }
// };

// console.log(Concurso.encontrarGanador(alicia, bob));
// console.log(Concurso.exportarResultados('etapas.json'));

// BONUS EXTRA
// digitalHouse()

// function digitalHouse(numero1, numero2){
//   let acumulador = 0;
//   while(acumulador < 100){
//     acumulador++;
//     if(((acumulador % numero1) === 0) && (((acumulador % numero2) === 0))){
//       console.log("Digital House");
//     }else if((acumulador % numero1) === 0){
//       console.log("Digital");
//     }else if((acumulador % numero2) === 0){
//       console.log("House");
//     }else{
//       console.log(acumulador)
//     }
//   }
// };

// console.log(digitalHouse(14, 10));

// sumArray()... Realoaded

// function sumArray(array){
// 	let resultado = 0;
//   for(let numero of array){
//     resultado += numero;
//   }
// 	return resultado;
// }

// console.log(sumArray([1,2,3]));
// console.log(sumArray([10, 3, 10, 4]));
// console.log(sumArray([-5,100]));

// Simulación Array.join()

// function join(array){
// 	let palabra = "";
// 	for(let letra of array){
// 		palabra += letra;
// 	}
// 	return palabra;
// }

// console.log(join(["C","a","s","i","l","l","e","r","o"]));
// console.log(join(["F","a","c","t","u","r","a"]));