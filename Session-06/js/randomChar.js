//Solicitar al usuario ingresar un numero
//Crear una funcion que genere un string con caracteres aleatorios 
//La longitud del string debe ser igual que el numero que ingreso el usuario 
//generar numero random de unicode 
// convertirlo y agregarlo a un string

function makeACharacter(){
     
    let characterCode = Math.floor(Math.random() * (126-33)) + 33;
    let charConversion = String.fromCharCode(characterCode)
    return(charConversion)
}

let stringSize = prompt("How big do you want your string?")
let stringCollection = ""
function stringGenerator(inputSize){
    for (let index = 0; index < inputSize; index++) {
        stringCollection += makeACharacter()
        
    }return stringCollection
}

console.log(makeACharacter())
console.log(stringGenerator(stringSize))