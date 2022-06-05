// aplicar filtro por signature
// input : 'Js'

// output:
//   {
//        signature: 'Js',
//        koders: [
//           'ivan',
//           'isra'
//        ],
//       mentor: 'ivan diaz'
//   }

//input: "Freddy";
//output: ["Js", "HTML", "React"];

const koderList = [
  {
    signature: "Js",
    koders: ["Ivan", "Freddy"],
    mentor: "Ivan"
  },
  {
    signature: "HTML",
    koders: ["Jason", "Penny", "Freddy"],
    mentor: "Alan"
  },
  {
    signature: "CSS",
    koders: ["Arnold", "Gerald"],
    mentor: "David"
  },
  {
    signature: "Introduccion",
    koders: ["Steve", "Charlie"],
    mentor: "Elvira"
  },
  {
    signature: "React",
    koders: ["Ivan", "Harry", "Freddy"],
    mentor: "Alejandra"
  }
];

//Filter by Signature

// let askSignature = prompt("Which signature would you like to search for ?")
 
// function signatureFilter(signature){
//   let returnValue
//   for (let index = 0; index < koderList.length; index++){
//     if(koderList[index].signature == signature){
//       returnValue = koderList[index]
//     }
    
    
//   }return returnValue
// }

// signatureFilter(askSignature)



//Signatures by student filter

let askStudent = prompt("Please choose a student")
let signatureAccum = []

function studentSignatures(){
  for (let index = 0; index < koderList.length; index++) {
    for (let index = 0; index < koderList[index].koders.length; index++) {
      if(koderList[index].koders[index] == askStudent){
          signatureAccum += koderList[index].signature
      }
    }
    
  }console.log(signatureAccum)
}

studentSignatures()

// // console.log(koderList[index].koders.length)