let koders = [
    "Hey Arnold",
    "Danny Phantom",
    "Sponge Bob"
]


koderTagged = []

function addKoderWord(input){
    for (let index = 0; index < koders.length; index++) {
        koderTagged.push(`Koder ${index + 1}: ${koders[index]}`)
        
    }
}

addKoderWord(koders)
console.log(koderTagged)