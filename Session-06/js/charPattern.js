// Ejercicio 3
// mostar en consola el sigueinte patron

// *
// **
// ***
// ****
// *****
// ******
// ***

//Pedir al usuario un input y guardarlo en variable 
// Pedir al usuario un numero de veces a imprimir y guardarlo en variable convirtiendolo en numero 
// Como se repetira esto se vuelve un ciclo 
//Hacer variable para guardar la acumulacion del caracter 



let character = prompt("Please write a character")
let repetition = Number(prompt("Please select the number of times you would like to repeat the patter"))

function patternCreator(input){
    let charAccum = []
    for (let index = 0; index < repetition; index++) {
        charAccum += character
        console.log(charAccum)
    }return charAccum
}

patternCreator(character)