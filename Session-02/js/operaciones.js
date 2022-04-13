let number1 = Number(prompt("Ingresa un numero"));
let number2 = Number(prompt("Ingresa un numero"));

let operacion = prompt("Seleccione operador (+-*/)");


if(operacion == "+"){
    resultado = console.log(number1+number2)
}
else if (operacion == "-"){
    resultado = console.log(number1-number2);
}
else if (operacion == "*"){
    resultado = console.log(number1*number2);
}
else (operacion == "/") ;{
    resultado = console.log(number1/number2);
}

