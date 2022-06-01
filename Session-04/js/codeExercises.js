/*
Ejercicio 1:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

// // string.replace(searchValue, newValue)
// let name = 'Ivan armando diaz alarcon';
// console.log(name.length);
// console.log( name.replaceAll(' ', '' ).length )

//Exercise in function 
// let askName = prompt("What is your full name?")
// let resultLength 

// function nameLength(inputName){
//     console.log(askName)
//     resultLength = askName.replaceAll(" ","").length
//     console.log(resultLength)
// }

// nameLength(askName);


/*
Ejercicio 2:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

// -Solicitar el nombre completo

// const filtro = name.match(/[@]/gi);
// console.log(filtro)



// la g hace que sea busqueda global y la i hace que pueda tomar mayusculas y minusculas 

// UPDATED CODE BEGINS 

// let askName = prompt("Please enter your name")
// let vocalAmount 
// let vocalArray = []

// function vocalCounter(inputName){
//     vocalAmount = askName.match(/[aeiou]/gi).length
//     vocalArray = askName.match(/[aeiou]/gi)
//     console.log(`You have ${vocalAmount} vowels in your name: ${vocalArray}`)
// }

// vocalCounter(askName)

//UPDATED CODE ENDS 

/*
Ejercicio 1:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
// UPDATED CODE BEGINS 

// let givenText = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
// let givenWord = prompt("Choose a word to replace")

// function wordReplacer(sentence){
//     let wordCounter = sentence.match(/estudiante/gi).length;
//     console.log(wordCounter);
//     let newPhrase = sentence.replaceAll("estudiante",givenWord)
//     console.log(newPhrase) 
    


// }

// wordReplacer(givenText)

//UPDATED CODE ENDS

// CLASS EXERCISES 

/*
Ejercicio 2:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

//Usando operador ternario para comparar la longitud de los strings y que imprima el mas largo.

// function stringComparator(input1, input2){
//     string1.length > string2.length ? console.log(`el string mas largo es ${string1}`) : console.log(`el string mas largo es ${string2}`);
// }

// let string1 = prompt("Please write something here")
// let string2 = prompt("Please write something more here")

// stringComparator(string1, string2)

//Fin del codigo del ejercicio 2 

/*
Ejercicio 3:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

// function largestWordOnString(input){
//     wordArray = wordString.split(" ")
//     word1 = wordArray[0]
//     word2 = wordArray[1]
//     if(word1 > word2){
//         console.log(word1)
//     }else{
//         console.log(word2)
//     }
// }

// let wordString = prompt("Please write a two word string")

// largestWordOnString(wordString)

//fin del ejercicio 3 

/*
Ejercicio 4
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/

// function basicCalculator(value1, value2){
//     let operation = prompt("Please select one of the following: +, -, *, / ")
//     let result 
//     if(operation == "+"){
//         result = firstValue + secondValue
//         console.log(`The ${operation} of ${firstValue} and ${secondValue} is ${result}`)
//         return result
        
//     }
//     if(operation == "-"){
//         result = firstValue - secondValue
//         console.log(`The ${operation} of ${firstValue} and ${secondValue} is ${result}`)
//         return result
        
//     }
//     if(operation == "*"){
//         result = firstValue * secondValue
//         console.log(`The ${operation} of ${firstValue} and ${secondValue} is ${result}`)
//         return result
        
//     }
//     if(operation == "/"){
//         result = firstValue / secondValue
//         console.log(`The ${operation} of ${firstValue} and ${secondValue} is ${result}`)
//         return result
        
//     }
// }

// let firstValue = Number(prompt("Please type the first value"))
// let secondValue = Number(prompt("Please type the second valye"))

// basicCalculator(firstValue, secondValue)

//END OF THE 4TH EXERCISE

