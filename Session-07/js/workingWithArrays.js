let koders = [
    "Hey Arnold",
    "Danny Phantom",
    "Sponge Bob"
]


koderTagged = []

//Function with for cicle
// function addKoderWord(input){
//     for (let index = 0; index < koders.length; index++) {
//         koderTagged.push(`Koder ${index + 1}: ${koders[index]}`)
        
//     }
// }

// addKoderWord(koders)
// console.log(koderTagged)

//Function with forEach

function addKoderWord(input){
    koders.forEach((koder, index)=>{
        koderTagged.push(`Koder ${index + 1}: ${koder}`)
    })
    return koderTagged
}

addKoderWord(koders)
console.log(koderTagged)