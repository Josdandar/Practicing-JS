// Ejercio 1
// -Pedir al usuarui un numero entre el 1 y el 10
// -imprimir todos los numeros pares que existen entre 1 y el numero selccionado

let askNumber = Number(prompt("Please select a number"))
let numbersCollection = []

function evenNumbers(input){
    for (let index = 0; index <= askNumber; index++) {
        if(index %2 == 0){
            numbersCollection += index
            console.log(numbersCollection)
        }
        
    }return numbersCollection
}

evenNumbers(askNumber)
console.log(numbersCollection)


// Ejercicio 2
// imprimir en consla la sumaa total de todos los digitos de una cantidad
// input: 1234
// output: 10

// Ejercicio 3
// mostar en consola el sigueinte patron

// *
// **
// ***
// ****
// *****
// ******
// ***

