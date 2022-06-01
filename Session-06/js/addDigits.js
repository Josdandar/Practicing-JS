// Ejercicio 2
// imprimir en consla la sumaa total de todos los digitos de una cantidad
// input: 1234

let askNumber = ((prompt("Please type a quantity")))


function addDigits (input){
    let addedNumbers = 0
    let numberArray = input.split("")
    console.log(numberArray)
    for (let index = 0; index < numberArray.length; index++) {
        addedNumbers += Number((numberArray[index]))
        console.log(addedNumbers)
        
    }return addedNumbers
}

addDigits(askNumber)


