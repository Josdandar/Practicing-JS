
// Ejercicio 3
// mostar en consola el sigueinte patron

// *
// **
// ***
// ****
// ******

let askSize = prompt("Select the size")
let patternAcc =""

function patternRepeater(patternSize){
    for(position = 0; position < patternSize; position++){
        patternAcc += "*"
        console.log(patternAcc)
    }
}


patternRepeater(askSize)