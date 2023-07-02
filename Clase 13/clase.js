// Loop de pares

// function loopDePares(numero){
//   for(let i = 0; i <= 100; i ++){
//     console.log(i);
//     if((i + numero) % 2 != 1){
//       console.log("El número " + (i + numero)+ " es par");
//     }
//   }
// }

// console.log(loopDePares(20))

// Loop de impares con palabra

// function loopDePares(numero, palabra){
//   for(let i = 0; i <= 100; i ++){
//     console.log(i);
//     if((i + numero) % 2 != 0){
//       console.log(palabra);
//     }
//   }
// }

// console.log(loopDePares(2, "hola"));

// Sumatoria

// function sumatoria(numero){
//   let suma = 0;
//   for(let i = 0; i <= numero ; i++){
//     suma += i;
//   }
//   return suma;
// }

// console.log(sumatoria(3));
// console.log(sumatoria(8));

// Nuevo arreglo

// function nuevoArreglo(numero){
//     let numeroAArray = [];
//     for(let i = 1; i <= numero; i++){
//         numeroAArray.push(i);
//     }
//     return numeroAArray;
// }

// console.log(nuevoArreglo(5));
// console.log(nuevoArreglo(10));

// Similar String.split()

// function stringSplit(string){
//     let stringAArray = [];
//     for(let substring of string){
//         stringAArray.push(substring);
//     }
//     return stringAArray;
// }

// console.log(stringSplit("hola"));
// console.log(stringSplit("chau"));

// Manejando dos arreglos

// function arrayHandler(array1, array2){
//     if(array1.length === array2.length){
//         for(let i = 0; (i < array1.length) && (i < array2.length); i++){
//             console.log("Soy " + array1[i] + " y yo soy " + array2[i]);
//         }
//     }else{
//         return "ERROR: Los arrays deben tener la misma cantidad de elementos."
//     }
// };

// console.log(arrayHandler([1,2,3,4], ["h","o","l","a"]));

// Palíndromo

// function palindromo(string){
//     let palabra = [];
//     for(let substring of string){
//         substring = substring.toLowerCase();
//         palabra.push(substring);
//     }
//     if(palabra.join() == palabra.reverse().join()){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(palindromo("anilina"));
// console.log(palindromo("Ana"));
// console.log(palindromo("Enrique"));