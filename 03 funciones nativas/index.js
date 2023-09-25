// Ejercicio 1
// Crear una funcion que reciba como argumento un string y devuelva la cantidad de caracteres que tenga el mismo.
// candidadDeCaracteres("Hola Mundo!") 
// deberia devolver 11
const candidadDeCaracteres = (string) => {
    return string.length
}
console.log(candidadDeCaracteres("Hola Mundo!"))

// Ejercicio 2
// Tomar la siguiente variable, convertirla a todo mayusculas y mostrar por consola. Hacer lo mismo pero con minusculas.
// let string = "El artista WOS cantando QUEREME"

const mayuscula = (string) => {
    return string.toUpperCase()
}
console.log(mayuscula("El artista WOS cantando QUEREME"))

const minuscula = (string) => {
    return string.toLowerCase()
}
console.log(minuscula("El artista WOS cantando QUEREME"))


// Ejercicio 3
// Tomar la variable del ejercicio 2 y cortar el string devolviendo solo "WOS" y hacer el mismo proceso pero devolver "QUEREME".
// const cortador=(string)=>{
//     return string.slice(11,15)
// }
// console.log(cortador("El artista WOS cantando QUEREME"))
const cortador = (string) => {
    return string.slice(24, 31)
}
console.log(cortador("El artista WOS cantando QUEREME"))

// Ejercicio 4
// Tomar la variable del ejercicio 2 y reemplazar "WOS" por "Queen" y "QUEREME" por "Bohemian Rhapsody"

const remplazar = (string, palabra, reemplazo) => {
    return string.replace(palabra, reemplazo)
}
console.log(remplazar("El artista WOS cantando QUEREME", "QUEREME", "Bohemian Rhapsody"))


// Ejercicio 5
// Crear una funcion que tome por parametro un numero de DNI y retorne el mismo valor pero como un string
// parsearDNI(12345678) // deberia devolver "12345678"

const convertidorString = (dni) => {
    let str = dni.toString()
    console.log(typeof str)
    return str
}
console.log(convertidorString(33081309))


// Ejercicio 6
// Crear una funcion que tome por parametro al menos 4 numeros y retorne el numero menor de ellos
// Realizar lo mismo pero con otra funcion que retorne el numero mayor
// minimo(5, 10, -7, 43) // deberia devolver -7
// maximo(-1, 12, 32, 18) // deberia devolver 32

const min = (num1 ,num2 ,num3,num4) => {
    return Math.min(num1 ,num2 ,num3,num4)
}
console.log(min(5, 10, -7, 43))

const mayus = (num1 ,num2 ,num3,num4) => {
    return Math.max(num1 ,num2 ,num3,num4)
}
console.log(mayus(-1, 12, 32, 18))


// Ejercicio 7
// Crear una funcion que tome por argumento un numero y retorne un numero aleatorio entre el 0 y el argumento.
// numeroRandom(100) // puede devolver cualquier numero entre 0 y 100

const numeroRandom=(numero)=>{
return Math.round(Math.random() * numero)
}

console.log(numeroRandom(55))

// Ejercicio 8
// Tomar la siguiente variable y lograr las siguientes tareas:
// Redondear el numero hacia arriba
// Redondear el numero hacia abajo
// let number = 12.49

const redondearArriba=(number)=>{
    return Math.ceil(number)
}
console.log(redondearArriba( 12.49))

const redondearAbajo=(number)=>{
    return Math.floor(number)
}
console.log(redondearAbajo( 12.49))