
// Ejercicio 1:
// Declarar variables con datos de un usuario(user, age, email)
// Mostrar estos datos por consola
// Mostrar el tipo de dato de cada variable por consola


// const user = "tamara zarate"
// console.log(user)
// console.log(typeof user)

// const age = 36
// console.log(age)
// console.log(typeof age)

// const email = "taty661@gmail.com"
// console.log(email)
// console.log(typeof email)

// Ejercicio 2:
// Pedir al usuario sus datos personales(nombre, edad, pais, profesion)
// Mostrar esos datos por consola usando concatenacion
// Mostrar por consola la edad + 10

// let firstname= prompt("ingrese nombre");
// console.log (`su nombre es" ${firstname}`);
// const age= prompt("ingrese la edad")
// console.log(`Su edad es ${age} `)
// console.log(age + 10)
// const country=prompt("ingrese su pais")
// console.log(`Su cuidad es ${country}`)
// const profession=prompt("ingrese la profesion")
// console.log(`Su profecion es ${profession}`)

// Ejercicio 3:
// Tomar las variables del ejercicio 1 y mostrar un texto por consola, por el documento y por un alert(hagan de a uno por vez, comentando y probando) y utilizar template literals.Recordar: document.write() y alert()

// const user="tamara zarate"
// console.log(user)
// const age= 36
// console.log( age)
// const email="taty661@gmail.com"
// console.log( email)

// document.write(`${user}  ${age}  ${email} `)
// alert(`Su nombre es ${user} ${age} ${email}`)

// Ejercicio 4:
// Pedir al usuario dos numeros y mostrar por el documento los resultados de cada calculo aritmetico.Ejemplo: El resultado de la suma es: ${ resultado }
// const number1 = Number(prompt("ingrese el primer numero"))
// const number2 = Number(prompt("ingrese un segundo numero"))

// const suma = number1 + number2;
// console.log(suma)
// const resta = number1 - number2;
// console.log(resta)
// const multiplicacion = number1 * number2;
// console.log(multiplicacion)
// const divicion = number1 / number2;
// console.log(divicion)
//  alert (` El resultado de la suma es: ${ suma }, el resultado de la resta es ${resta}, el resultado de la multiplicacion es ${multiplicacion} y ewl resultado de la divicion es ${divicion} `)
// Bonus:
// A lo que hiciste en el ejercicio 4, sumale un tercer numero a cada calculo.Mostrar por consola y analizar que paso en cada caso.Obtuviste los resultados esperados ?

// const number1 = Number(prompt("ingrese el primer numero"))
// const number2 = Number(prompt("ingrese un segundo numero"))
// const number3 = Number(prompt("ingrese un tercer numero"))

// const suma = number1 + number2 + number3;
// console.log(suma)
// const resta = number1 - number2 - number3;
// console.log(resta)
// const multiplicacion = number1 * number2 * number3;
// console.log(multiplicacion)
// const divicion = number1 / number2 / number3;
// console.log(divicion);


// document.write( `el resultado de la suma ${suma} y resta  ${resta} , multiplicacion ${multiplicacion} y divicion: ${divicion}`)


// Necesitamos un programa que pida un nombre y un apellido con los siguientes mensajes respectivamente:

// ¿Cuál es tu nombre?.
// ¿Cuál es tu apellido?.
// Con esta información, el programa deberá mostrar el siguiente mensaje: Hola {nombre} {apellido}, bienvenida a Ada

// const nombre=prompt("¿Cuál es tu nombre?.")
// const apellido=prompt("¿Cuál es tu apellido?")
// alert (`Hola ${nombre} ${apellido}, bienvenida a Ada`)


// Ejercicio 2: Heladería
// Necesitamos un programa para una heladería que permita ingresar tres gustos de helado con los siguientes mensajes respectivamente:

// ¿Cuál es el primer gusto?.
// ¿Cuál es el segundo gusto?
// ¿Cuál es el tercer gusto?.
// Con esta información, el programa deberá mostrar el siguiente mensaje: Aquí tiene su helado de {gusto1}, {gusto2} y {gusto3}

// const primerGusto=prompt("¿Cuál es el primer gusto?.")
// const segundoGusto=prompt("¿Cuál es el segundo gusto?")
// const tercerGusto=prompt("¿Cuál es el tercer gusto?.")

// alert(`Aquí tiene su helado de ${primerGusto}, ${segundoGusto} y ${tercerGusto}`)
// console.log(alert(`Aquí tiene su helado de ${primerGusto}, ${segundoGusto} y ${tercerGusto}`))

// Ejercicio 3: Datos personales
// Necesitamos un programa que permita ingresar nombre, apellido, edad, nacionalidad y número de documento con los siguientes mensajes respectivamente:

// ¿Cuál es tu nombre?.
// ¿Cuál es tu apellido?.
// ¿Cuál es tu edad?
// ¿Cuál es tu nacionalidad?
// ¿Cuál es tu número de documento?
// Con esta información, el programa deberá mostrar el siguiente mensaje: El nuevo perfil fue ingresado al sistema: nombre: {nombre}, apellido: {apellido}, edad: {edad}, nacionalidad: {nacionalidad}, número de documento: {dni}

// const nombre=prompt("¿Cuál es tu nombre?.")
// const apellido=prompt("¿Cuál es tu apellido?")
// const edad=prompt("¿Cuál es tu edad?")
// const nacionalidad= prompt("¿Cuál es tu nacionalidad?")
// const dni= prompt("¿Cuál es tu número de documento?")

// alert(`El nuevo perfil fue ingresado al sistema: nombre: ${nombre}, apellido: ${apellido}, edad:${edad}, nacionalidad: ${nacionalidad}, número de documento: ${dni}`)

// Ejercicio 4: Listas de reproducción
// Nos pidieron un programa que permita ingresar el nombre de una playlist y el título de tres canciones, mediante los siguiente mensajes:

// ¿Cuál es el nombre de la playlist?
// ¿Cuál es la primera canción?
// ¿Cuál es la segunda canción?
// ¿Cuál es la tercera canción?
// Con está información el programa deberá mostrar el siguiente mensaje: Se ha creado la playlist {playlist} con las canciones {cancion1}, {cancion2}, {cancion3}



// Ejercicio 5: Dirección completa
// Necesitamos un programa que pida ingresar los siguientes datos de una dirección: calle, número, departamento, código postal, ciudad y país, mediante los siguiente mensajes respectivamente:

// ¿Cuál es la calle?.
// ¿Cuál es el número?.
// ¿Cuál es el departamento?
// ¿Cuál es el código postal?
// ¿Cúal es la ciudad?
// ¿Cúal es el país?
// Con está información el programa deberá mostrar el siguiente mensaje: La dirección que ha ingresado es: {calle} {numero} {departamento}, {codigoPostal}, {ciudad}, {pais}

// Ejercicio 6: Años perro
// Necesitamos un programa que pida ingresar una edad con el siguiente mensaje:

// Ingresá una edad por favor
// El programa deberá mostrar el equivalente de esa edad en años perro mediante el siguiente mensaje El equivalente de {edad} en años perros es: {resultado}

// Creá el programa que acabamos de describir.

// Ejercicio 7: Minutos a segundos
// Necesitamos un programa que pida una cantidad de minutos con el siguiente mensaje:

// Ingresá una cantidad de minutos.
// Con esta información, el programa deberá mostrar el resultado de la conversión en segundos mediante el mensaje: El resultado de la conversión de {minutos} minutos a segundos es: {resultado}

// Creá el programa que acabamos de describir

// 

// Ejercicio 8: Días a segundos
// Necesitamos un programa que pida una cantidad de días con el siguiente mensaje:

// Ingresá una cantidad de días por favor
// El programa deberá mostrar el resultado de la conversión de los días a segundos mediante el mensaje: El resultado de la conversión de {dias} días a segundos es: {resultado}

// Creá el programa que acabamos de describir

// Ejercicio 9: Kilómetros a millas
// Necesitamos un programa que pida una cantidad de kilómetros mediante el mensaje:

// Ingresá una cantidad de kilómetros
// Con esta información, el programa deberá mostrar el resultado de la conversión de kilómetros a millas mediante el siguiente mensaje: El resultado de la conversión de {kilometros} kilometros a millas es: {resultado}

// Ejercicio 10: Área de un triángulo
// Necesitamos un programa que pida ingresar el valor de la base y el valor de la altura de un triángulo mediante los siguientes mensajes:

// Ingresá el valor de la base del triángulo
// Ingresá el valor de la altura del triángulo
// Con esta información, el programa deberá mostrar el resultado del área del triángulo mediante el siguiente mensaje: El resultado del área del triángulo con base {base} y altura {altura} es: {resultado}


// Ejercicio 11: Perímetro de un rectángulo
// Necesitamos un programa que pida ingresar el valor de la base y el valor de la altura de un rectángulo mediante los siguientes mensajes:

// Ingresá el valor de la base del rectángulo
// Ingresá el valor de la altura del rectángulo
// Con esta información, el programa deberá mostrar el resultado del perímetro del rectángulo mediante el siguiente mensaje: El resultado del perímetro del rectángulo con base {base} y altura {altura} es: {resultado}


// Ejercicio 12: Porcentaje
// Necesitamos un programa que pida ingresar un número, y luego el porcentaje que se desea obtener del mismo mediante los siguientes mensajes:

// Ingresá un número
// Ingresá un porcentaje
// Con esta información, el programa deberá mostrar el resultado del porcentaje mediante el siguiente mensaje: El porcentaje {porcentaje} del número {numero} es: {resultado}


// Ejercicio 13: Tiempo de viaje
// Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:

// Ingresá la distancia del recorrido
// Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s

// Las velocidades de los medio de transporte son:

// a pie : 5 km/ hs
// bicicleta : 10 km/ hs
// auto : 50 km/hs

// Ejercicio 14: Duración de vuelo
// Necesitamos un programa que pida ingresar 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos, mediante los siguientes mensajes:

// ¿Cúal es la primer escala?
// ¿Cúal es la duración de la primer escala?
// ¿Cúal es la segunda escala?
// ¿Cúal es la duración de la segunda escala?
// ¿Cúal es la tercer escala?
// ¿Cúal es la duración de la tercer escala?
// Con esta información, el programa deberá mostrar todas las escalas con su duración y la duración total del vuelo con el siguiente mensaje: La duración total del vuelo con escala en {escalaUno} de duración {duracionEscalaUno} hs, {escalaDos} de duración {duracionEscalaDos} hs y {escalaTres} de duración {duracionEscalaTres} hs es: {resultado} hs.

// Ejercicio 15: Incremento
// Necesitamos un programa que pida ingresar un número de partida y una cantidad, mediante los siguientes mensajes:

// Ingresá un número
// Ingresá una cantidad
// Con esta información, el programa deberá incrementar el número cinco veces la cantidad y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento. Por ejemplo si ingresamos el 6 como número y el 1 como cantidad, debería mostrar lo siguiente:

// 'Incremento 1: 7'
// 'Incremento 2: 8'
// 'Incremento 3: 9'
// 'Incremento 4: 10'
// 'Incremento 5: 11'
// Creá el programa que acabamos de describir.

// Ejercicio 16: Celsius a Fahrenheit
// Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje:

// Ingresá una cantidad de grados Celsius
// Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado}

// Creá el programa que acabamos de describir

// Ejercicio 17: Múltiplos
// Necesitamos un programa que pida dos números con los siguientes mensajes respectivamente:

// Ingresá el primer número.
// Ingresá el segundo número.
// Con esta información, el programa deberá mostrar si el primer valor es múltiplo del segundo mediante el siguiente mensaje: El número {primerNumero} es múltiplo de {segundoNumero}: {resultado}

// jercicio 18: Segundos a horas, minutos y segundos
// Necesitamos un programa que pida ingresar una cantidad de segundos , con el siguiente mensaje:

// Ingresá una cantidad de segundos
// Con esta información, el programa deberá mostrar la conversión en horas, minutos y segundos que corresponde a esa cantidad mediante el mensaje: {segundosIngresados} segundos son = {horas} horas, {minutos} minutos y {segundos} segundos


// Ejercicio 19: Cantidad de huéspedes
// Necesitamos un programa que pida ingresar cuántas habitaciones tiene un hotel para 2, 3 y 4 personas , con los siguientes mensajes respectivamente:

// Ingresá cuantas habitaciones para dos personas tiene el hotel
// Ingresá cuantas habitaciones para tres personas tiene el hotel
// Ingresá cuantas habitaciones para cuatro personas tiene el hotel
// Con esta información, el programa deberá mostrar el máximo de huéspedes que puede albergar mediante el mensaje : El hotel tiene una capacidad de {resultado} personas


// Ejercicio 20: Calculador de gastos
// Necesitamos un programa que pida ingresar cuanto dinero disponible tiene una persona, tres servicios que tiene que abonar y el monto de los mismos con los siguientes mensajes respectivamente:

// ¿Cuál es tu monto disponible?
// ¿Cuál es el nombre primer servicio?
// ¿Cuál es el monto del primer servicio?
// ¿Cuál es el nombre segundo servicio?
// ¿Cuál es el monto del segundo servicio?
// ¿Cuál es el nombre tercer servicio?
// ¿Cuál es el monto del tercer servicio?
// Con esta información, el programa deberá mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda mediante el mensaje : Los servicios a pagar son {servicio1} de $ {montoServicio1}, {servicio2} de $ {montoServicio2}, servicio3 de $ {montoServicio3}, queda disponible un saldo de $ {saldoRestante}.

// Creá el programa que acabamos de describir.

// Ejercicio 21: Orden de compras
// Necesitamos un programa que pida ingresar la orden de compra de un local, para eso se deberá ingresar la cantidad que se desea comprar de tres productos distintos(mouse, teclado y auriculares) y la cantidad de cuotas de la compra mediante los siguientes mensajes respectivamente:

// Ingresá la cantidad de mouse que deseas comprar
// Ingresá la cantidad de teclados que deseas comprar
// Ingresá la cantidad de auriculares que deseas comprar
// Ingresá la cantidad de cuotas
// Tenemos que: * Un mouse sale $400. * El teclado $800. * Los auriculares $1500.

// Con esta información, el programa deberá mostrar un mensaje con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas con el mensaje: 'El detalle de la compra es: mouse {cantidadDeMouse} x $ 400 $ {precioTotalDeMouse}, teclado {cantidadDeTeclados} x $ 800 $ {precioTotalDeTeclados}, auriculares {cantidadAuriculares} x $ 1500 $ {precioTotalAuriculares}. El total es $ {precioTotal} en {cuotas} cuotas de $ {precioPorCuota}'.