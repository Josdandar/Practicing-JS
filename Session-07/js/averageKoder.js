let koderArray = [
    {
        name: "Arnold",
        score: 96,
    },
    {
        name: "Gerald",
        score: 59,
    },
    {
        name: "Helga",
        score: 89,
    }
]


let letterGrade
let koderGroupResult = 0

function getAvg(input){
    koderArray.forEach((item, index)=> {
        console.log(item)
        koderGroupResult += item.score
    })
    koderGroupResult = koderGroupResult/koderArray.length
    console.log(koderGroupResult)
    return koderGroupResult
}

function assignGrade(input){
    if(input <=60){
        return "gradeF"
    }
    if(input <=70){
        return "gradeD"
    }
    if(input <=80){
        return "gradeC"
    }
    if(input <=90){
        return "gradeB"
    }
    if(input <=100){
        return "gradeA"
    }
}

getAvg(koderArray)
letterGrade = assignGrade(koderGroupResult)
console.log(letterGrade)


switch (letterGrade){
    case "gradeF":
        console.log(`Your group score is:${koderGroupResult} you got an F`)
        break;
    case "gradeD":
        console.log(`Your group score is:${koderGroupResult} you got a D`)
        break;
    case "gradeC":
        console.log(`Your group score is:${koderGroupResult} you got a C`)
        break;
    case "gradeB":
        console.log(`Your group score is:${koderGroupResult} you got an B`)
        break;
    case "gradeA":
        console.log(`Your group score is:${koderGroupResult} you got an A`)
        break;
}