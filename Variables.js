var edad = 30; 

console.log(edad)

//ES 6 >
let nombre = "Pedro"
const casado = false

//redefenir
edad = 40
console.log(edad)

//casado = true // Error

/*
Declaración de variables 
inicial letra, $ o _ 
si tiene varias palabras la siguiente empieza en Mayus
*/

const nombre = prompt("ingrese el nombre")
console.log("Hola "+nombre)

let edad = prompt("ingrese la edad")
edad=parseInt(edad)
console.log(edad+10)