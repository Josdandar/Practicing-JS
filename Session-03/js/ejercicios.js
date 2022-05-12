//Pseudocodigo
//Pedir primer letra 
//Guardar primer letra en una variable
//Pedir segunda letra 
//Guardar segunda letra en una variable 
// Comparar los valores de letra1 y letra2
// Comparar si la primer letra es menor que letra dos 
// Console.log tu letra esta antes o despues 


// let letra1 = prompt("Ingresa una letra")
// let letra2 = prompt("Ingresa una  letra")

//  if (letra1 < letra2){
//      console.log("Tu primera letra aparece antes")
//  }else{
//      console.log("Tu primera letra aparece despues")
//  }


//Primer codigo con funcion 

let letra1 = prompt("Ingresa una letra");
let letra2 = prompt("Ingresa otra letra");
function letrasAlfabeto(letra1, letra2){
    if(letra1 < letra2){
        console.log("la letra " + letra1 +"aparece antes en el alfabeto")
    }else{
        console.log("la letra "+ letra2 +"aparece antes en el alfabeto");
    }
}


// control kc para comentar todo 
// control ku para quitar los comentarios 

// Pseudocodigo #2
//Pedir  primer dato 
// Almacenar primer dato en una variable
// Pedir  segundo dato 
// Almacenar segundo dato en una variable
//Si dato uno es mayor que dato dos dividir dato uno entre dato dos 
// Si dato uno es menor a dato dos sumar dato uno mas dato dos 
// si dato uno es igual a dato a dos multiplicar ambos entre si 
// Console.log del resultado 

//  let numero1 = Number(prompt("Ingresa un numero"))
//  let numero2 = Number(prompt("Ingresa un numero"))

//  if (numero1 > numero2){
//      console.log("Tu division : "+  numero1 / numero2)
//  }
//  else if (numero1 < numero2){
//      console.log("Tu suma es: " + Number(numero1 + numero2))
//  }
//  else (numero1 == numero2);{
//      console.log("Tu multiplicacion es : " + Number(numero1 * numero2))
//  }

//ejercicio 2 en funcion 

const numero1 = prompt("Ingrese un numero1");
const numero2 = prompt("Ingrese otro numero2");
operaciones(numero1, numero2); //Se esta aplicando hoisting
function operaciones(numero1, numero2){
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    console.log(typeof(numero1));
    console.log(typeof(numero2));

    if (numero1 > numero2){
        let division = numero1/numero2;
        console.log("el resultado de tu division es " + division);
        }else if((numero1 < numero2)){
            let sumar = numero1 + numero2;
            console.log("el resultado de tu suma es " + sumar);
        }else (numero1 = numero2){
            let multiplicar = numero1 * numero2;
            console.log("El resultado de la multiplicacion: " + multiplicar);
        }
    }
}


// let randomNumber = prompt("Ingresar un numero del 1 al 100")
// if (randomNumber %2 == 0){
//     console.log("Tu resultado es par")
// }else {
//     console.log("Tu numero es impar")
// }

// let userName = prompt("Escribe tu nombre")
// let userWeight = Number(prompt("Escribe tu peso en kg"))

// console.log(userWeight / 16.5 )


//Ejercicio 3 en funcion 

const nombre = prompt("Ingresa tu nombre");
const pesoEnLaTierra = prompt("Ingresa tu peso");

function pesoPersona (nombre, pesoEnLaTierra){
    peso = Number(pesoEnLaTierra);
    const gravedad = 9.81;
    let masa = pesoEnLaTierra / gravedad;
    const gravedadEnLaLuna = 1.622;
    let pesoEnLaLuna = masa * gravedadEnLaLuna;
    console.log("El peso de " + nombre + "en la luna es de " +pesoEnLaLuna)
}