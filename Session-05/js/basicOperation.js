/*
Ejercicio 4
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/

//EJERCICIO 4 

function basicOperation (){
    let inputData = prompt("Select an operation and two numbers separated by a ,  ").split(",");
    console.log(inputData);
    let operation = inputData[0]
    inputData[1] = (Number(inputData[1]))
    inputData[2] = (Number(inputData[2]))

    switch (operation) {
            case "addition":
                console.log(inputData[1]+inputData[2])
                break;
            case "subtraction":
                    console.log(inputData[1]-inputData[2])
                 break;
            case "multiply":
                        console.log(inputData[1]*inputData[2])
                 break;
            case "divide":
                    console.log(inputData[1]/inputData[2])
                break;
            default: console.log("Enter an operation, number1, number2")
                break;
            }
    
}

basicOperation()



