// VARIABLES UTILIZADAS

let cuadros = [
  {
      nombre : "Mona Lisa",
      creador : "Leonardo Da Vinci",
      creacion : 1503
  },
  {
      nombre : "La ultima cena",
      creador : "Leonardo Da Vinci",
      creacion : 1495
  },
  {
      nombre : "La noche estrellada",
      creador : "Vincent van Gogh",
      creacion : 1889
  },
  {
      nombre : "El grito",
      creador : "Edvard Munch",
      creacion : 1893
  },
  {
      nombre : "Trigal con cuervos",
      creador : "Vincent van Gogh",
      creacion : 1890
  },
  {
      nombre : "Maria Magdalena",
      creador : "Leonardo Da Vinci",
      creacion : 1495
  }
]

let matrizEjemplo = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15]
]

// EJERCICIO 1

// function viejoArrayANuevoArray(array){
//   let nuevoArray = [];

//   for(let i = 0; i < array.length; i++){
//     if(array[i].creacion > 1800){
//       nuevoArray.push(array[i]);
//     }
//   }

//   return nuevoArray;
// }

// console.log(viejoArrayANuevoArray(cuadros))

// EJERCICIO 2

// function bubbleSort(array, orden) {
//   let aux;

//   for (let i = 1; i < array.length; i++) {
//     for (let j = 0; j < array.length - i; j++) {
//       let comparacion;
      
//       if (orden === "ASC" || orden === "asc") {
//         comparacion = array[j].creacion > array[j + 1].creacion;
//       } else if (orden === "DESC" || orden === "desc") {
//         comparacion = array[j].creacion < array[j + 1].creacion;
//       }

//       if (comparacion) {
//         aux = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = aux;
//       }
//     }
//   }

//   return array;
// }

// console.log(bubbleSort(cuadros, "ASC"))

// EJERCICIO 3

// a)

// function sumaFilaDos(matriz) {
//   let filaDos = matriz[1];
//   let suma = 0;

//   for (let i = 0; i < filaDos.length; i++) {
//     suma += filaDos[i];
//   }

//   return suma;
// }

// console.log(sumaFilaDos(matrizEjemplo))

// b)

// function obtenerPares(matriz) {
//   let pares = [];

//   for (let fila of matriz) {
//     for (let elemento of fila) {
//       if (elemento % 2 === 0) {
//         pares.push(elemento);
//       }
//     }
//   }

//   return pares;
// }

// console.log(obtenerPares(matrizEjemplo));