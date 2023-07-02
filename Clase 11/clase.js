const prompt = require("prompt-sync")({ sigint: true });

// usuarios === cuentas bancarias
// ARRAY
// Actividad 1)
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

// Actividad 2), Actividad 3), Actividad 4), Actividad 5)

// let banco = {
//   clientes : arrayCuentas,
//   consultarCliente : function(titular){
//       for(let i = 0; i < this.clientes.length; i++){
//         if(this.clientes[i].titularCuenta === titular) 
//         return this.clientes[i]}
//   },
//   deposito : function(titular, dinero){
//     for(let i = 0; i < this.clientes.length; i++){
//       if(this.clientes[i].titularCuenta === titular){
//         this.clientes[i].saldoEnPesos += dinero;
//         return  "Depósito realizado, su nuevo saldo es: $" + this.clientes[i].saldoEnPesos;
//       }
//     }
//   },
//   extraccion : function(titular, dinero){
//     for(let i = 0; i < this.clientes.length; i++){
//       if(this.clientes[i].titularCuenta === titular){
//         if((this.clientes[i].saldoEnPesos - dinero) < 0){
//           return "Fondos insuficientes";
//         }else{
//           this.clientes[i].saldoEnPesos -= dinero;
//           return "Extracción realizada correctamente, su nuevo saldo es: $" + this.clientes[i].saldoEnPesos;
//         }
//       }
//     }
//   }
// };

// console.log(banco.extraccion("Jacki Shurmer", 789));

// BONUS EXTRA
// Propiedad Única

let arrayEjemplo =  [ { nombre: "Lean", edad: 27 }, 
                      { nombre: "Eze", edad: 49} ];

// function propiedadUnica(arrayObjetos, string){
//   let nuevoArrayObjetos = [];
//   for(let i = 0; i < arrayObjetos.length; i++){
//     if(string == "nombre" || string === "Nombre"){
//       let nuevoObjeto = {nombre: ""};
//       nuevoObjeto.nombre = arrayObjetos[i].nombre;
//       nuevoArrayObjetos.push(nuevoObjeto);
//     }else if(string == "edad" || string === "Edad"){
//       let nuevoObjeto = {edad: 0};
//       nuevoObjeto.edad = arrayObjetos[i].edad;
//       nuevoArrayObjetos.push(nuevoObjeto);
//     }
//   }
//   return nuevoArrayObjetos;
// }

// console.log(propiedadUnica(arrayEjemplo, "Nombre"));

// Calculador de Notas

let alumnos = [
  {
  nombre: "Melisa Victoria",
  numeroDeLegajo: 534,
  listaDeNotas: [8.5, 7, 9, 4, 6]
  },
  {
  nombre: "Elián Moisés",
  numeroDeLegajo: 915,
  listaDeNotas: [9, 8.5, 5, 7.5, 10]
  },
  {
    nombre: "Ezequiel Nova",
    numeroDeLegajo: 420,
    listaDeNotas: [4, 1, 7.5, 2, 5]
  }
]

// function calcularPromedio(array, alumno){
//   let sumaDeNotas = 0;
//   let notaFinal;
//   let cantidadNotas;
//   let devolverAlumno;
//   for(let i = 0; i < array.length; i++){
//     if(array[i].nombre == alumno){
//       devolverAlumno = array[i];
//       cantidadNotas = array[i].listaDeNotas.length;
//       for(let nota of array[i].listaDeNotas){
//         sumaDeNotas += nota;
//       }
//       notaFinal = sumaDeNotas / cantidadNotas;
//       array[i].notaFinal = notaFinal;
//     }
//   }
//   devolverAlumno.notaFinal = notaFinal;
//   if(devolverAlumno.notaFinal > 7){
//     devolverAlumno.estado = "APROBADO";
//   }else if(devolverAlumno.notaFinal < 7){
//     devolverAlumno.estado = "DESAPROBADO";
//   }
//   return devolverAlumno;
// }

// console.log(calcularPromedio(alumnos,"Melisa Victoria"));
// console.log(calcularPromedio(alumnos,"Elián Moisés"));
// console.log(calcularPromedio(alumnos,"Ezequiel Nova"));