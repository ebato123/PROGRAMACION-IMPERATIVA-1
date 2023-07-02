// 1) Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro
//    de una matriz.

let matrizEjemplo = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5]
];

// function sumarDatos(matriz) {
//   let suma = 0;
//   for (let fila = 0; fila < matriz.length; fila++) {
//     for (let columna = 0; columna < matriz[fila].length; columna++) {
//       suma += matriz[fila][columna];
//     }
//   }
//   return suma;
// }
// console.log(sumarDatos(matrizEjemplo));

// 2) Completa la función para que retorne una matriz
//    de 10x10

// function generarMatriz10x10(){
//   let matriz = [];
//   let i = 1;
//   for(let fila = 0 ; fila < 10; fila++){
//     matriz[fila] = [];
//     for(let columna = 0; columna < 10; columna++){
//       matriz[fila][columna] = i;
//       i++;
//     }
//   }
//   return matriz;
// }

// matrizEjemplo = generarMatriz10x10();
// console.table(matrizEjemplo);

// 3) Por último, vamos a generar dos funciones:

// a) Una va a sumar los valores en la diagonal marcada en rojo.

// function contarRojos(matriz){
//   let suma = 0;
//   let columna = 0;
//   for(let fila = 0; fila < matriz.length; fila++){
//     suma += matriz[fila][columna];
//     if(columna < matriz[fila].length){
//       columna++;
//     }
//   }
//   return suma;
// }

// console.log(contarRojos(matrizEjemplo));

// COMENTARIO: En este caso lo hice con UN solo FOR, ya que el resultado obtenido es
//             el mismo, y mejora la performance del programa.

// b) La otra va a marcar los valores de la diagonal marcada en verde.

// function marcarVerdes(matriz){
//   let valoresMarcados = [];
//   let columna = matriz[0].length - 1;
//   for(let fila = 0; fila < matriz.length; fila++){
//     valoresMarcados.push(matriz[fila][columna]);
//     if(columna > 0){
//       columna--;
//     }
//   }
//   return valoresMarcados;
// }

// console.log(marcarVerdes(matrizEjemplo));