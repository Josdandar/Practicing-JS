//20 /4 /2022

//Obtener el Score promedio de cada materia(HTML, CSS, JS, REACT) (DONE)
//Obtener el promedio individual de cada mentor 
//Crear un array de strings con la siguiente forma 
// *mi nombre es {nombre} y mi promedio es {promedio}*
//Obtener la lista de mentores cuyo promedio sea  mayor a 9 

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

let html = 0 
let css = 0 
let js = 0
let react = 0

signaturesObject = {}
mentorsScoreObject = {}

let ivan = 0 
let alejandra = 0
let alan = 0
let oscar = 0
let signatureSize = Object.keys(mentorsArray[0].scores).length
let objectSize = Object.keys(mentorsScoreObject).length
let approvedMentors = []

function signatureScores(input){
  input.forEach((item, index)=> {
    item.scores.forEach((item, index) => {
      if(item.signature == "HTML"){
        html += item.score
      }
      if(item.signature == "CSS"){
        css += item.score
      }
      if(item.signature == "JS"){
        js += item.score
      }
      if(item.signature == "JS"){
        react += item.score
      }
    })
  })

  html = (html/mentorsArray.length)
  css = (css/mentorsArray.length)
  js = (js/mentorsArray.length)
  react = (react/mentorsArray.length)

  console.log(`The average score of HTML is ${html}`)
  console.log(`The average score of CSS is ${css}`)
  console.log(`The average score of JS is ${js}`)
  console.log(`The average score of REACT is ${react}`)

  signaturesObject = {
    html,
    css,
    js,
    react
  }
}

function mentorScore(input){
  
  input.forEach((item, index)=> {
    if(item.name == "Ivan")
    item.scores.forEach((item, index)=>{
      ivan += item.score
    })
    if(item.name == "Alejandra")
    item.scores.forEach((item, index)=>{
      alejandra += item.score
    })
    if(item.name == "Alan")
    item.scores.forEach((item, index)=>{
      alan += item.score
    })
    if(item.name == "Oscar")
    item.scores.forEach((item, index)=>{
      oscar += item.score
    })
    
  })
  ivan = (ivan/signatureSize);
  alejandra = (alejandra/signatureSize);
  alan = (alan/signatureSize);
  oscar = (oscar/ signatureSize)
   
  console.log(`The average score of Ivan is ${ivan}`)
  console.log(`The average score of Alejandra is ${alejandra}`)
  console.log(`The average score of Alan is ${alan}`)
  console.log(`The average score of Oscar is ${oscar}`)

  mentorsScoreObject = [
    {ivan},
    {alejandra},
    {alan}, 
    {oscar}]



}

function mentorsFilter(input){
  mentorsScoreObject.forEach((item,index)=> {
    if(item.ivan >= 9){
      approvedMentors.push(item)
    }
    if(item.alejandra >= 9){
      approvedMentors.push(item)
    }
    if(item.alan >= 9){
      approvedMentors.push(item)
    }
    if(item.oscar >= 9){
      approvedMentors.push(item)
    }
  })
}


signatureScores(mentorsArray)
mentorScore(mentorsArray)
mentorsFilter(mentorsScoreObject)
console.log(signaturesObject)
console.log(mentorsScoreObject)
console.log(approvedMentors)





