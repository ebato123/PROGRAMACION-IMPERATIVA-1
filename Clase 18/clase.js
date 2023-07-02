// 1) 

let matrizEjemplo = [
  [10,   3,    2,    1, 4, 7],
  [ 5,   5,   10,  100, 4],
  [ 5, 125,   10, 1020, 4],
  [ 5,   5, 5097,  100, 4]
];

function sumarMayoresA10(matriz){
    let valorMatriz;
    let suma = 0;
    for(let i = 0; i < matriz.length; i++){
      for(let j = 0; j < matriz[i].length; j++){
      valorMatriz = matriz[i][j];
      if(valorMatriz >= 10 && valorMatriz < 1000){
        suma += valorMatriz;
      }
    }
  }
  return suma;
}

console.log(sumarMayoresA10(matrizEjemplo))