// Condicionales y operadores lógicos

// Ejercicios con operadores 

// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// const puedeVerPelicula= (edad, booleano) => {
//      return  edad >= 15 || booleano === true
// }

//  console.log(puedeVerPelicula(12, false)) // false
//  console.log(puedeVerPelicula(12, true))  // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log( puedeVerPelicula(18, true) ) // true


// estaEnRango(valor, minimo, maximo)

// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

// const estaEnRango = (numero, minimo, maximo) => {
//     return numero >= minimo && numero <= maximo

// }

// console.log(estaEnRango(3, 1, 10))  // true
// console.log(estaEnRango(1, 1, 10)) // true
// console.log(estaEnRango(10, 1, 10))  // true
// console.log(estaEnRango(12, 1, 10)) // false
// console.log(estaEnRango(-3, 1, 10)) // false

// puedeAvanzar(colorSemaforo)

// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// const puedeAvanzar = (color) => {
//     if (color === "verde") {
//         return true
//     } else if (color === "amarillo" || color === "rojo") {
//         return false
//     }
//     return 'Error: color de semáforo inválido'
// }



// console.log(puedeAvanzar('verde'))     // true
// console.log(puedeAvanzar('amarillo')) // false
// console.log(puedeAvanzar('rojo'))      // false
// console.log(puedeAvanzar('lila'))     // 'Error: color de semáforo inválido'


// esVocal(letra)

// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

// esVocal('a') // true
// esVocal('n') // false
// esConsonante(letra)


// const  esVocal=(letra)=>{
//     return letra==="a"||letra==="e"||letra==="i"||letra==="o"||letra==="u"
// }

// console.log(esVocal('a')) // true
// console.log(esVocal('n')) // false


// esConsonante(letra)


// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es


// const esConsonante=(letra)=>{
//     return !esVocal(letra)
// }

// console.log(esConsonante("n")) // true
// console.log(esConsonante("a")) 
// console.log(esConsonante("r"))

// esHoraValida(hora)

// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

// const esHoraValida = (hora) => {
//     let horas = hora.slice(0, 2);
//     let minutos = hora.slice(3, 5)

//     return horas <= 12 && minutos <= 60


// }
// console.log(esHoraValida('12.23'))// true
// console.log(esHoraValida('12:65')) // false
// console.log(esHoraValida('28:05')) // false
// console.log(esHoraValida('00:00')) // true

// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// const puedeRenovarCarnet=(pasoTests, tieneMultasImpagas, pagoImpuestos)=>{
//     return pasoTests && pagoImpuestos && !tieneMultasImpagas

// }
// console.log(puedeRenovarCarnet(true, true, true) )   // false
//  console.log(puedeRenovarCarnet(true, true, false) )  // false
// console.log(puedeRenovarCarnet(true, false, true) )  // true
// console.log(puedeRenovarCarnet(true, false, false))  // false
// console.log( puedeRenovarCarnet(false, true, true))   // false
// console.log( puedeRenovarCarnet(false, true, false))  // false
// console.log(puedeRenovarCarnet(false, false, true))  // false
// console.log(puedeRenovarCarnet(false, false, false)) // false

// puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
// Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.


// const puedeGraduarse=(asistencia, materiasAprobadas, tesisAprobada)=>{
//     return asistencia >=75 && materiasAprobadas >= 50 && tesisAprobada
// }
// console.log(  puedeGraduarse(80, 50, true))  // true
// console.log(  puedeGraduarse(80, 50, false)) // false
// console.log(  puedeGraduarse(80, 45, true) ) // false
// console.log(  puedeGraduarse(80, 45, false)) // false
// console.log(  puedeGraduarse(65, 50, true))  // false
// console.log(  puedeGraduarse(33, 55, false)) // false
// console.log(  puedeGraduarse(42, 45, true)) // false
// console.log(  puedeGraduarse(28, 45, false)) // false

// Ejercicios con condicionales

// esParOImpar(numero)
// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

// const esParOImpar = (numero) => {
//     let par = numero % 2
//     if (par == 0) {
//         return "es par"
//     }
//     return "es impar"

// }

// console.log(esParOImpar(3))  // 'impar'
// console.log(esParOImpar(10)) // 'par'


//  esPositivoONegativo(numero)

// Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

//  const esPositivoONegativo=(numero)=>{
//     if(numero>=0){
//         return "es positivo"
//     }
//     return "es negativo"

//     }


//  console.log(esPositivoONegativo(3) ) // 'positivo'
//  console.log(esPositivoONegativo(-5)) // 'negativo'


// avanzarSemaforo(colorActual)



// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

// const avanzarSemaforo = (colorActual) => {
//     if (colorActual === "verde") {
//         return "amarillo"
//     } else if (colorActual === "amarillo") {
//         return "rojo"
//     } else if (colorActual === "rojo") {
//         return "verde"
//     }
// }
//  console.log(avanzarSemaforo('verde'))  // 'amarillo'
//  console.log(avanzarSemaforo('amarillo'))  // 'rojo'
//  console.log(avanzarSemaforo('rojo'))  // 'verde'


// obtenerDiasMes(mes)


// Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

// const obtenerDiasMes = (mes) => {
//     if (mes === "enero" || mes === "mayo" || mes === "agosto" || mes === "diciembre") {
//         return 31
//     } else if (mes === "abril" || mes === "julio" || mes === "septiembre" || mes === "noviembre") {
//         return 30
//     }
//     else if (mes === "febrero") {
//         return 29
//     }
//     return "no es un mes valido"
// }

// console.log(obtenerDiasMes("abril")) // 31
// console.log(obtenerDiasMes("febrero")) // 29
// console.log(obtenerDiasMes("mayo"))



// obtenerGeneracion(anioNacimiento)

// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// const obtenerGeneracion = (anioNacimiento) => {
//     if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
//         return "Baby boomer";
//     } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
//         return "Generación x"

//     } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
//         return "Millennials"

//     } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
//         return "Generación Z"
//     }
// }

// Generación	Años de nacimiento
// Baby boomer	1949-1968
// Generación X	1969-1980
// console.log(obtenerGeneracion(2001))
// Generación Z	1994-2010



// obtenerSensacion(temperatura)


// Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:


// const obtenerSensacion = (temperatura) => {
//     if (temperatura <= 0) {
//         return "¡Está helando!"
//     } else if (temperatura >= 0 && temperatura <= 15) {
//         return "¡Hace frío!"
//     } else if (temperatura >= 15 && temperatura < 25) {
//         return "Está lindo"
//     } else if (temperatura >= 25 && temperatura < 30) {
//         return "Hace calor"
//     } else if (temperatura >= 30) {
//         return "¡Hace mucho calor!"
//     }
// }

// Temperatura	Mensaje
// Menor a 0°	¡Está helando!
// Mayor o igual a 0° y menor a 15°	¡Hace frío!
// Mayor o igual a 15° y menor a 25°	Está lindo
// Mayor o igual a entre 25° y menor a 30°	Hace calor
// Mayor o igual de 30°	¡Hace mucho calor!
// obtenerSensacion(33) // "¡Hace mucho calor!"

// obtenerNota(puntaje)
// Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

// Menor a 6	Desaprobado
// Mayor o igual a 6 y menor a 7	Regular
// Mayor o igual a 7 y menor a 8	Bueno
// Mayor o igual a entre 8 y menor a 10	Muy bueno
// 10	Excelente
// Menor a 0 o mayor a 10	Puntaje inválido

// const obtenerNota = (puntaje) => {
//     if (puntaje < 6) {
//         return "Desaprobado"
//     } else if (puntaje >= 6 && puntaje < 7) {
//         return "Regular"
//     } else if (puntaje >= 7 && puntaje < 8) {
//         return "Bueno"
//     } else if (puntaje >= 8 && puntaje < 10) {
//         return "Muy bueno"
//     } else if (puntaje === 10) {
//         return "excelente"
//     } else if (puntaje <= 0 || puntaje >= 10) {
//         return "Puntaje inválido"
//     }

// }



// console.log(obtenerNota(7))  // "Bueno"
// console.log(obtenerNota(9.6))  // "muy bueno"
// console.log(obtenerNota(20))  // "Puntaje inválido"



// jugarPiedraPapelTijera(a, b)
// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

// const jugador1 = prompt("ingrese ,papel ,tijera ,piedra").toLowerCase();
// console.log(jugador1)
// const jugador2= prompt("ingrese ,papel ,tijera ,piedra").toLowerCase()
// console.log(jugador2)

// const jugarPiedraPapelTijera = (a, b) => {
//     if (jugador1 === "tijera" && jugador2 === "piedra" || jugador1 === "piedra" && jugador2 === "tijera") {
//         return "¡Ganó piedra!"

//     } else if (jugador1 === "papel" && jugador2 === "piedra" || jugador1 === "piedra" && jugador2 === "papel") {
//         return "¡Ganó papel!"
//     } else if (jugador1 === "papel" && jugador2 === "tijera" || jugador1 === "tijera" && jugador2 === "papel") {
//         return "¡Ganó tijera!"
//     } else if (jugador1 === "tijera" && jugador2 === "tijera" || jugador1 === "piedra" && jugador2 === "piedra" || jugador1 === "papel" && jugador2 === "papel") {
//         return "¡Empate!"
//     }
//         return "su opcion es incorrecta"
// }



// console.log(jugarPiedraPapelTijera(jugador1, jugador2))  // ¡Ganó piedra!
// console.log(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
// console.log(jugarPiedraPapelTijera('papel', 'piedra'))  // ¡Ganó papel!
// console.log(jugarPiedraPapelTijera('piedra', 'papel'))  // ¡Ganó papel!
// console.log(jugarPiedraPapelTijera('papel', 'tijera'))  // ¡Ganó tijera!
// console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
// console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
// console.log(jugarPiedraPapelTijera('papel', 'papel'))   // ¡Empate!
// console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!




// const jugada1 = Math.round(Math.random() * 2)

// const jugada2 = Math.round(Math.random() * 2)

// const jugarPiedraPapelTijera = (a, b) => {
//     const piedra = 0
//     const papel = 1
//     const tijera = 2

//     if (jugada1 === piedra && jugada2 === tijera || jugada1 === tijera && jugada2 === piedra) {

//         return "gano piedra"
//     } else if (jugada1 === papel && jugada2 === tijera || jugada1 === tijera && jugada2 === papel) {
//         return "gano tijera"
//     } else if (jugada1 === papel && jugada2 === piedra || jugada1 === piedra && jugada2 === papel) {
//         return "gano papel"
//     } else if (jugada1 === piedra && jugada2 === piedra || jugada1 === papel && jugada2 === papel || jugada1 === tijera && jugada2 === tijera) {
//         return "empate"
//     }
// }
// console.log(jugarPiedraPapelTijera(jugada1, jugada2))




