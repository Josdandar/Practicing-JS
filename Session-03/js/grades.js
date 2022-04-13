//Solicitar una calificacion al usuario 
// Dependiendo su calificacion la pondremos en una categoria 
// Responderle su categoria 

userGrade = Number(prompt("Ingresa tu calificacion del 0 al 100"))

if (userGrade >= 60){
    console.log(lettergrade.gradeF)
}
else if(userGrade >=70){
    console.log(lettergrade.gradeD)
}
else if(userGrade >=80){
    console.log()
}
else if (userGrade >=90){
    console.log
}else (userGrade == 100){
    console.log()
}


let letterGrade = "gradeF"

switch (letterGrade){
    case "gradeF":
        console.log("Tu calificacion es una super F")
        break;
    case "gradeD":
        console.log("Ni mal ni bien, tienes una D")
        break;
    case "gradeC":
        console.log("Vas bien mijo, te ganaste una C")
        break;
    case "gradeB":
        console.log("B de burro aaah te creas B de bueno")
        break;
    case "gradeA":
        console.log("Date un descanso nerd, tienes A")
        break;
}