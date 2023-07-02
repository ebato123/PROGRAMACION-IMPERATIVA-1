// (1) 

// function mostrarNumeros() {
//     for (let i = 1; i <= 100; i++) {
//       if ((i % 3 === 0 && i % 5 === 0) || i % 15 === 0) {
//         console.log("fizbuzz");
//       } else if (i % 3 === 0) {
//         console.log("fizz");
//       } else if (i % 5 === 0) {
//         console.log("buzz");
//       } else console.log(i);
//     }
//   }
  
//   console.log(mostrarNumeros());

// (2)

// let arrayEjemplo = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

// let indiceEjemplo = 10;

// function valorPorIndice(array, indice) {
//   return array[indice];
// }

// console.log(valorPorIndice(arrayEjemplo, indiceEjemplo));

// (3)

// function diasDelMes(numeroMes) {
//   if ([1, 3, 5, 7, 8, 10, 12].includes(numeroMes)) {
//     return 31;
//   } else if ([4, 6, 9, 11].includes(numeroMes)) {
//     return 30;
//   } else if (numeroMes > 12) {
//     return "ERROR: Introduzca un valor del 1 al 12 dependiendo del mes.";
//   } else return 28;
// }

// console.log(diasDelMes(2));

// (4)

// function invertirNumero(numero) {
//   let numeroString = numero + "";
//   let resultadoFinal = [];
//   for (let i = 0; i < numeroString.length; i++) {
//     resultadoFinal.unshift(numeroString[i]);
//   }
//   return parseInt(resultadoFinal.join(""));
// }

// console.log(invertirNumero(41500732));

// (5)

let arrayEjemplo = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100
];

function valoresRepetidos(array){
  let numeros = [];
  let numerosRepetidos = [];
  let i = 0;
  do{
    if(numeros.includes(array[i]) === true){
      numerosRepetidos.push(array[i]);
    }else{
      numeros.push(array[i])
    }
    i++;
  }while(i < array.length)
  return numerosRepetidos;
};

console.log(valoresRepetidos(arrayEjemplo));