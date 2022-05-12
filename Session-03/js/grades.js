// 1- Evaluar una calificacion
// -Solicitar una puntiacion al usuario de 0 a 100
// -Evaluemos con un if si su calificacions es A, B, C, D, E, etc
// -Mostremos con un switch su calificacion.
	
// Calificaciónes
// < 60  calificacion 'F'
// < 70 calificacion 'D'
// < 80 calificacion C
// < 90 calificacion B
// < 100 calificacion A

// --------------------------------------------



// userGrade = Number(prompt("Ingresa tu calificacion del 0 al 100"))

// if (userGrade >= 60){
//     console.log(lettergrade.gradeF)
// }
// else if(userGrade >=70){
//     console.log(lettergrade.gradeD)
// }
// else if(userGrade >=80){
//     console.log()
// }
// else if (userGrade >=90){
//     console.log
// }else (userGrade == 100){
//     console.log()
// }


// let letterGrade = "gradeF"

// switch (letterGrade){
//     case "gradeF":
//         console.log("Tu calificacion es una super F")
//         break;
//     case "gradeD":
//         console.log("Ni mal ni bien, tienes una D")
//         break;
//     case "gradeC":
//         console.log("Vas bien mijo, te ganaste una C")
//         break;
//     case "gradeB":
//         console.log("B de burro aaah te creas B de bueno")
//         break;
//     case "gradeA":
//         console.log("Date un descanso nerd, tienes A")
//         break;
// }


let askGrade = Number(prompt("Please enter your grade"));
let letterGrade = userGrading(askGrade)
 


function userGrading(inputGrade){
    if(inputGrade <= 60){
        return "F"
    }
    if(inputGrade <= 70){
        return "D"
    }
    if(inputGrade <= 80){
        return "C"
    }
    if(inputGrade <= 90){
        return "B"
    }
    if(inputGrade <= 100){
        return "A"
    }
}

switch (letterGrade){
    case "F":
        console.log("You got an F my friend")
        break; 
    case "D": 
        console.log("Keep studying, you got a D");
        break
    case "C": 
        console.log("C is cool");
        break
    case "B": 
        console.log("B de bueno");
        break
    case "A": 
        console.log("A from Awesome");
        break
    default:
        console.log("Cuack cuack, you will repeat semester")
}


userGrading(askGrade)
console.log()