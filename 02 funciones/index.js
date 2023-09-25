// Ejercitacion de la clase
// Se espera que puedan realizar los ejercicios utilizando todo lo visto hasta ahora, y testeando sus propios codigos con varios ejemplos (numeros enteros, positivos y negativos, con coma, etc) las veces que sea necesario para asegurarse su funcionamiento. Probar que pasa si no se reciben parametros y analizar cada caso.
// Recordar sintaxis:

// const miFuncion = (parametros) => {
//     // sentencias de codigo
//     return
// 
// miFuncion()

// Ejercicio 0
// Crear una funcion que reciba como parametro un nombre y muestre por consola un saludo a esa persona.
// const saludo = (nombre) => {
//     return(`hola ${nombre} bienvenida`)
// }
// saludo("jesica");

// Ejercicio 1
// Crear una funcion que reciba como parametro dos numeros y devuelva el resultado de cada calculo aritmetico.
// sumar(a, b)
// restar(a, b)
// dividir(a, b)
// multiplicar(a, b)

// const sumar= ( a , b)=>{
//     const result= a + b
// return  result
// }
// console.log(sumar(30,5))

// const restar = (a , b) => {
//     const result = a - b
//     console.log(result)
//     return result
// }
// restar(40,8)

// const dividir=(a ,b)=>{
//     const result= a / b
//     return result
// }

// dividir(40,2)

// const multiplicar=(a, b)=>{
//     const result= a*b
//     console.log(result)
//     return result
// }
// multiplicar(50,5)



// Ejercicio 2
// Crear una funcion que reciba como parametro un sueldo y un numero que representa el porcentaje de aumento. La funcion debe devolver el sueldo mas el aumento.
// aumentarSueldo(1000, 10) // deberia devolver 1100

// const aumento= (sueldo , porcentaje)=>{
//     const porcentajeAumento= sueldo * porcentaje/100
//     const totalAumento= porcentajeAumento + sueldo
//     return  alert(` el resultado es ${totalAumento}`);  
// }

// aumento(1000,20)

// Ejercicio 3
// Crear una funcion que reciba como parametros un nombre, una edad, una profesion y un pais y retorne un string con la concatenacion de los datos ingresados. Probar con varios datos varias veces para comprobar funcionamiento. Ejemplo: Me llamo Pepa, tengo 30 anios, vivo en Colombia y soy abogada.

// const infoPersonal=(nombre , edad , profesion , pais)=>{
//  const frace= (`su nombre es ${nombre} y su edad es ${edad} su pais de origen es ${pais} y su profesion actual es ${profesion}`)
//  return frace 
// }
// infoPersonal ()
// console.log(infoPersonal("jesica", 35,"developer", "rusa"))

// // Ejercicio 4
// // Crear una funcion que reciba como parametro un precio y devuelva el precio mas el IVA.

// const precioConIva=(precio)=>{
//     const resultado= (precio * 21/100)+ precio
//     return resultado
// }
// console.log(precioConIva(100))

// Ejercicio 5
// Como harian para usar las funciones del ejercicio 1 pero que los numeros se los pidamos al usuario?
 // Repetir solucion pero para el ejercicio 2 y ejercicio 3

// const valor1=Number(prompt("ingreso precio"))
// const valor2=Number(prompt("ingrese prcentaje"))

// aumento(valor1 , valor2)


// const username= prompt("ingrese nombre");
// const age= prompt("ingrese age")
// const profesion= prompt("ingresen profecion")
// const pais= prompt("ingrese pais")

// console.log(infoPersonal(username , age ,profesion ,pais))


// Bonus:
// Crear una funcion contador() que cada vez que se ejecute, sume en una unidad a una variable

let number= 0;
const contador=()=>{

 number++
 console.log(number)

}
contador();
contador();
contador();
contador();
contador();
contador();

// preguntar porque si pongo la variable en la funcion me pone NaN?

