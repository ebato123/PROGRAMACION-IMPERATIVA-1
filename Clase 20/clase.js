// Ejercicio 1

let usuarios = [
    {
        usuario: "roca",
        likes: 524,
        id: 1
    },
    {
        usuario: "erson",
        likes: 125,
        id: 2
    },
    {
        usuario: "mati",
        likes: 652,
        id: 3
    },
    {
        usuario: "ramiro",
        likes: 5411,
        id: 4
    },
    {
        usuario: "romero",
        likes: 1812,
        id: 5
    },
    {
        usuario: "marcos",
        likes: 2362,
        id: 6
    },
    {
        usuario: "mirco",
        likes: 7232,
        id: 7
    },
    {
        usuario: "santiago",
        likes: 1245,
        id: 8
    },
    {
        usuario: "rocky",
        likes: 8344,
        id: 9
    },
    {
        usuario: "mateo",
        likes: 1264,
        id: 10
    },
    {
        usuario: "silantro",
        likes: 642,
        id: 11
    },
    {
        usuario: "farol",
        likes: 925,
        id: 12
    },
    {
        usuario: "socrates",
        likes: 6545,
        id: 13
    },
    {
        usuario: "mamaruego",
        likes: 5372,
        id: 14
    },
    {
        usuario: "sacamelodeaca",
        likes: 8123,
        id: 15
    }
];
let aux;

for(let i = 0; i < usuarios.length; i++){
    for(let j = 0; j < usuarios.length - 1; j++){
        if(usuarios[j].likes < usuarios[j + 1].likes){
            aux = usuarios[j];
            usuarios[j]= usuarios[j + 1];
            usuarios[j + 1] = aux;
        }
    }
}

console.log(
    "PRIMER LUGAR : " + usuarios[0].usuario + ", con " + usuarios[0].likes + " likes!."
);
console.log(
    "SEGUNDO LUGAR : " + usuarios[1].usuario + ", con " + usuarios[1].likes + " likes!."
);
console.log(
    "TERCER LUGAR : " + usuarios[2].usuario + ", con " + usuarios[2].likes + " likes!."
);
console.log(
    "ÚLTIMO LUGAR : " + usuarios[usuarios.length - 1].usuario + ", con " + usuarios[usuarios.length - 1].likes + " likes..."
);

// Ejercicio 2

let clima = [
    {
        dia: 6,
        mes: 1,
        tempMax: 27,
        tempMin: 19
    },
    {
        dia: 12,
        mes: 2,
        tempMax: 31,
        tempMin: 22
    },
    {
        dia: 21,
        mes: 3,
        tempMax: 24,
        tempMin: 16
    },
    {
        dia: 16,
        mes: 4,
        tempMax: 21,
        tempMin: 12
    },
    {
    dia: 31,
    mes: 5,
    tempMax: 24,
    tempMin: 17
    },
    {
    dia: 6,
    mes: 6,
    tempMax: 17,
    tempMin: 9
},
]

// a) Ordenar por temperatura mínima de menor a mayor.

for(let i = 0; i < clima.length; i++){
    for(let j = 0; j < clima.length - 1; j++){
        if(clima[j].tempMin > clima[j + 1].tempMin){
            aux = clima[j];
            clima[j]= clima[j + 1];
            clima[j + 1] = aux;
        }
    }
}

console.log(clima)

// b) Ordenar por temperatura máxima de mayor a menor.

for(let i = 0; i < clima.length; i++){
    for(let j = 0; j < clima.length - 1; j++){
        if(clima[j].tempMax < clima[j + 1].tempMax){
            aux = clima[j];
            clima[j]= clima[j + 1];
            clima[j + 1] = aux;
        }
    }
}

console.log(clima)