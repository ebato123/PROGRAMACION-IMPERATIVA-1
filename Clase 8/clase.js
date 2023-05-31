// 1)
function mostrarSig(num) {
    for (let x = 1; x <= 10; x++)
    {console.log(num + x)}
}

mostrarSig(10)

// 2)
function mostrarSig() {
    for (let x = 5; x <= 20; x += 3)
    {console.log(x)}
}

mostrarSig()

// 3)
function sumarNums(){
    for (let x = 0; x <= 100; x ++)
    {console.log(x)}
}

sumarNums()

// 4)
function mostrarFact(num){
    let contenedor = 1;
    for (let x = 1; x <= num; x ++){
        contenedor *= x;
    }
    return contenedor;
}

console.log(mostrarFact(8))

// 5)
function fibonacci(n) {
    if (n === 1) return 0; // pos 1
    if (n === 2) return 1; // pos 2
    let anterior = 0;
    let anterior1 = 1;
    let sum = 0;
    while (n >= 3) {
        sum = anterior + anterior1;
        anterior = anterior1;
        anterior1 = sum;
        n--;
    }
    return sum;
}

    console.log(fibonacci(10));

    