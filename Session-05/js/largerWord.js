/*
Ejercicio 3:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

function returnLargestWord(){
    let sentenceExample = prompt("Enter a two words sentence")
    let wordArray = sentenceExample.split(" ");
    if(wordArray.length[0]>wordArray.length[1]){
        console.log("This is the largest word: " + wordArray[0])
    }else{
        console.log("This is the largest word: " + wordArray[1])
    }
}

returnLargestWord()