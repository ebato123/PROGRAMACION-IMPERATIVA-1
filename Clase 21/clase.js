// 1)

function imprimirDecimales(){
    for(let i = 0; i < 1; i++){
        for(let j = 0; j <= 9; j++){
            console.log(parseFloat(i + "." + j));
        }
    }
}

// console.log(imprimirDecimales())

// 2)

// function imprimirNumeros(i, j){
//     let contador = 3;
//     while(i <= j){
//         if(contador === 3){
//             contador = 0;
//             console.log(i)
//         }
//         contador++;
//         i++;
//     }
// }

// console.log(imprimirNumeros(5, 20))

// 3)

// function sumatoria(){
//     for(let i = 0; i <= 100; i++){
//         for(let j = 0; j <= 100; j++){
//             console.log(i + " + " + j + " = " + (i + j))
//         }
//     }
// }

// console.log(sumatoria())

// 4)

// function vocalesEnString(string){
//     let contador = 0;
//     for(let vocal of string){
//         vocal = vocal.toLowerCase()
//         if(vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u"){
//             contador++;
//         }
//     }
//     return contador;
// }

// console.log(vocalesEnString("Ola"));

// 5)

// arrayEjemplo = [1,2,3]

// function arrayAlRevez(array){
//     let arrayInvertido = [];
//     for(let elemento of array){
//         arrayInvertido.unshift(elemento);
//     }
//     return arrayInvertido;
// }

// console.log(arrayAlRevez(arrayEjemplo));

// 6) 


// TERMINAR
function piramide(){
    for(let i = 0; i <= 30; i++){
        for(let j = 0; j <= 30; j++){
            jstring = "" + j;
            console.log()
        }
    }
}

console.log(piramide());