// input 
// [
//   'Jason Vorhees',
//   'Penny Wise',
//   'Freddy Krueger',
// ]

// output: 
// [
//   'koder 1: Jason Vorhees'
//   'koder 2: Penny Wise',
//   'koder 3: Freddy Krueger',
// ]

// Asignamos en una constante el arreglo dado
// Creamos una funcion de flecha con el forEach
// En cada iteracion al arreglo se le agrego el item y el index en el elemento
//

const halloweenKoders = [
    "Jason Vorhees",
    "Penny Wise",
    "Freddy Krueger"
]


halloweenKoders.forEach((koder, index, arr) => {
    let emptyArray = []
    let item = ` Koder ${index + 1} ${koder}`
    emptyArray.push(item)
    console.log(emptyArray)
});



