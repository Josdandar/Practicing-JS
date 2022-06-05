//input 


let koders = [
    ["Jose" , "De Anda"],
    ["Danny", "Phantom"],
    ["Hey", "Arnold"]
]


let resultArray = []


for (let index = 0; index < koders.length; index++) {
    let objectArray = {
        name: koders[index][0],
        lastname: koders[index][1]
    }
    resultArray.push(objectArray)
}

console.log(resultArray)