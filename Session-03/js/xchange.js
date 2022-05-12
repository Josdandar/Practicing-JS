// let moneyAmount = Number(prompt("Enter the amount of money"))

// let firstCurrency = prompt("Please select your currency")

// if(firstCurrency == "MXN"){
//     let secondCurrency = prompt("Please select which type of currency you want (USD, RMB, EURO, BITCOIN")
//     if (secondCurrency == "USD"){
//         console.log(moneyAmount * 20 )
//     }
//     else if(secondCurrency == "RMB"){
//         console.log(moneyAmount * 0.32)
//     }
//     else if(secondCurrency == "EURO"){
//         console.log(moneyAmount * 0.046)
//     }else (secondCurrency == "BITCOIN");{
//         console.log(moneyAmount * 0.0000012)
//     }
// }
// else if(firstCurrency == "USD"){
//     let secondCurrency = prompt("Please select which type of currency you want (MXN, RMB, EURO, BITCOIN")
//     if (secondCurrency == "MXN"){
//         console.log(moneyAmount * 20 )
//     }
//     else if(secondCurrency == "RMB"){
//         console.log(moneyAmount * 6.37)
//     }
//     else if(secondCurrency == "EURO"){
//         console.log(moneyAmount * 0.92)
//     }else (secondCurrency == "BITCOIN");{
//         console.log(moneyAmount * 0.0000024)
//     }
// }

// Exercise made in function 

// 2- Casa de cambio

// Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de cambio para hacer la conversion de  la cantidad capturada. ejemplo: 

// 1-¿Que cantidad en MXN deseas convertir ?
// R= 1500 MXN
// 2¿A que pais vas a viajar?
// R= USA


let currentCurrency  = prompt("Which currency do you have? Please select: MXN, USD, RMB")

let wantedCurrency  = prompt("Which currency do you want?")

let currencyXchanged 

let moneyAmount = Number(prompt("Enter the amount of money"))

function moneyChanger(moneyQuantity){
    if(currentCurrency == "MXN" && wantedCurrency == "USD"){
        const dollarValue = 20.36 
        currencyXchanged = moneyQuantity / dollarValue
        console.log(currencyXchanged)
        return currencyXchanged
        
    }if(currentCurrency == "MXN" && wantedCurrency == "RMB"){
        const rmbValue = 3.02 
        currencyXchanged = moneyQuantity / rmbValue
        console.log(currencyXchanged)
        return currencyXchanged
        
    }if(currentCurrency == "USD" && wantedCurrency == "MXN"){
        const pesoValue = 20.36 
        currencyXchanged = moneyQuantity * pesoValue
        console.log(currencyXchanged)
        return currencyXchanged
        
    }if(currentCurrency == "USD" && wantedCurrency == "RMB"){
        const rmbValue = 6.75 
        currencyXchanged = moneyQuantity * rmbValue
        console.log(currencyXchanged)
        return currencyXchanged
        
    }if(currentCurrency == "RMB" && wantedCurrency == "MXN"){
        const rmbValue = 3.02 
        currencyXchanged = moneyQuantity * rmbValue
        console.log(currencyXchanged)
        return currencyXchanged
        
    }if(currentCurrency == "RMB" && wantedCurrency == "USD"){
        const rmbValue = 6.75
        currencyXchanged = moneyQuantity / rmbValue
        console.log(currencyXchanged)
        return currencyXchanged
        
    }
}

moneyChanger(moneyAmount)