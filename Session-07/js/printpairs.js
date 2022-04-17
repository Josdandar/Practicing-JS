// Ejercicio 1 

// -Pedir al usuario un numero entre el 1 y el 10
// -imprimir todos los numeros pares que existen entre 1 y el numero selccionado

//Pedir un prompt al usuario del 1-10
//Asignarlo a una variable 
// Buscar manera para conocer los pares 
//Ir numero por numero con la solucion 



let numeroEntrada = Number(prompt("Ingresa un numero del 1-10"))
function numeroPar (){

        for(let index= 0 ; index <= numeroEntrada; index++){
            if(index % 2 == 0){
                console.log(index)
            }
        }

}
numeroPar ()