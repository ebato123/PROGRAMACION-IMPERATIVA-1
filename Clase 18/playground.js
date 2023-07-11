
let gastoMensual = [
    [2000, 1570, 4600, 3400, 1600, 2400, 1800],
    [1600, 3590, 2200, 3500, 2020, 2500, 2700],
    [1600, 1500, 1900, 2800, 2180, 1340, 1200],
    [2800, 1450, 1500, 1700, 4900, 1100,  500]
];

// a)

function gastoSemanal(matriz, semana){
    let gastoSemana = 0;
    let fila = semana - 1;
    if(semana > matriz.length){
        return "ERROR: Ingresar una semana válida: Un MES contiene 4 SEMANAS.";
    }else{
        for(let i = 0; i < matriz[fila].length; i++){
            gastoSemana += matriz[fila][i];
        }
    }
    return gastoSemana;
}

console.log(gastoSemanal(gastoMensual, 3));

// b)

function gastoDelDia(matriz, semana, dia){
    let gastoDia = 0;
    let fila = semana - 1;
    let elemento = dia - 1;
    if(semana > matriz.length){
        return "ERROR: Ingresar una semana válida: Un MES contiene 4 SEMANAS.";
    }else if(dia > matriz[fila].length){
        return "ERROR: Ingresar una día válido: Una SEMANA contiene 7 DÍAS.";
    }else{
        gastoDia = matriz[fila][elemento];
    }
    return gastoDia;
}

console.log(gastoDelDia(gastoMensual, 4, 7));

// c) 

function gastoMensualTotal(matriz){
    let gastoTotal = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            gastoTotal += matriz[i][j];
        };
    };
    return gastoTotal;
};

console.log(gastoMensualTotal(gastoMensual));

// RESPUESTA: Sí, es un resultado TOTAL de la matriz. 
//            El orden de los factores no altera el resultado final.

// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más
//    gastos se realizaron.

function semanaYDiaConMasGasto(matriz){
    let semanaConMasGasto = 0;
    let indiceSemana;
    let diaConMasGasto = 0;
    let indiceDia;
    let indiceDiaSemana;
    for(let i = 1; i <= matriz.length; i++){
        if(semanaConMasGasto < gastoSemanal(matriz, i)){
            semanaConMasGasto = gastoSemanal(matriz, i);
            indiceSemana = i;
        };
    };
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > diaConMasGasto){
                diaConMasGasto = matriz[i][j];
                indiceDia = j + 1;
                indiceDiaSemana = i + 1;
            };
        };
    };
    console.log("");
    console.log(
        "La semana con más gastos realizados fue la semana N°: " + indiceSemana + "."
    );
    console.log(
        "Con un total gastado de: $" + semanaConMasGasto + "."
    );
    console.log("");
    console.log(
        "El día con más gastos realizados fue el día N°: " + indiceDia + ", de la semana N°: " + indiceDiaSemana + "."
    );
    console.log(
        "Con un total gastado de: $" + diaConMasGasto + "."
    );
    console.log("");
};

console.table(gastoMensual);
console.log(semanaYDiaConMasGasto(gastoMensual));