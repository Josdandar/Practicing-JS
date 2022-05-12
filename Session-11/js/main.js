// let sum = 10 + 50 // declarando un valor a una variable

// const name1 = prompt('Ingresa el nombre del koder1') // el nombre - string

// const name2 = prompt('Ingresa el nombre del koder 2')

// console.log('El koder 1 es: ', name1.toUpperCase())
// console.log('El koder 2 es: ', name2.toUpperCase())

// Ejercicio
// -obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)

// -obtener el promedio individual de cada mentor
// -crear un array de strings con la siguiente forma:

//     "Mi nombre es {nombre} y mi promedio es de {promedio}"
// -obtener la lista de mentores cuyo promedio sea mayor a 9.5 


const mentorsArray = [
    {
        name:"Ivan",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alejandra",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Alan",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Oscar",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
  ]

// obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)

// let getMentorsAvgBySignature = (mentors) => {

// }

function getMentorsAvgBySignature (mentors) {
    const numMentors = mentors.length
    let htmlTotal = 0
    let cssTotal = 0
    let jsTotal = 0
    let reactTotal = 0

    mentors.forEach((mentor, index) => {
        // debugger
        // console.log(mentor)
        // console.log(mentor.name)
        // console.log(mentor.scores) // array
        mentor.scores.forEach((signature) => {
            // debugger
            // console.log(signature) // objeto
            if(signature.signature === 'HTML') htmlTotal += signature.score

            if(signature.signature === 'CSS') cssTotal += signature.score

            if(signature.signature === 'JS') jsTotal += signature.score

            if(signature.signature === 'ReactJS') reactTotal += signature.score

            // else if
            // if(signature.signature === 'HTML') {
            //     htmlTotal += signature.score
            // }else if(signature.signature === 'CSS') {
            //     cssTotal += signature.score
            // }else if(signature.signature === 'JS') {
            //     jsTotal += signature.score
            // }else if(signature.signature === 'ReactJS') {
            //     reactTotal += signature.score
            // }
        })
    })
    // console.log('----totales----')
    // console.log('htmlTotal', htmlTotal)
    // console.log('cssTotal', cssTotal)
    // console.log('jsTotal', jsTotal)
    // console.log('reactTotal', reactTotal)
    const avgHtml = htmlTotal / numMentors
    const avgCss = cssTotal / numMentors
    const avgJs = jsTotal / numMentors
    const avgReact = reactTotal / numMentors
    // console.log('-----promedios-----')
    // console.log('avgHtml', avgHtml)
    // console.log('avgCss', avgCss)
    // console.log('avgJs', avgJs)
    // console.log('avgReact', avgReact)
    return {
        html: avgHtml, 
        css: avgCss, 
        js: avgJs,  
        react: avgReact
    }
}

// const allAvegare = getMentorsAvgBySignature(mentorsArray)
// console.log('El promedio de los modulos son:')
// console.log(allAvegare )



const allAverage = getMentorsAvgBySignature(mentorsArray) // regresa un objeto con los promedios
console.log(allAverage)
const suma = 2+6


// - obtener el promedio individual de cada mentor
/*
Output:
[
    {
        name: "Ivan",
        average: 9.0
    },
    {
        name: "Alan",
        average: 9.0
    },
    {
        name: "Ale",
        average: 9.0
    },
    {
        name: "Oscar",
        average: 9.0
    }
]
generen una función
*/

function getAllAverageMentors(){
    let arrayMentors = [];
    mentors.forEach((mentor, index) => {
        mentor.scores.forEach((score) => {
            
        })
    })
}