let moneyAmount = Number(prompt("Enter the amount of money"))

let firstCurrency = prompt("Please select your currency")

if(firstCurrency == "MXN"){
    let secondCurrency = prompt("Please select which type of currency you want (USD, RMB, EURO, BITCOIN")
    if (secondCurrency == "USD"){
        console.log(moneyAmount * 20 )
    }
    else if(secondCurrency == "RMB"){
        console.log(moneyAmount * 0.32)
    }
    else if(secondCurrency == "EURO"){
        console.log(moneyAmount * 0.046)
    }else (secondCurrency == "BITCOIN");{
        console.log(moneyAmount * 0.0000012)
    }
}
else if(firstCurrency == "USD"){
    let secondCurrency = prompt("Please select which type of currency you want (MXN, RMB, EURO, BITCOIN")
    if (secondCurrency == "MXN"){
        console.log(moneyAmount * 20 )
    }
    else if(secondCurrency == "RMB"){
        console.log(moneyAmount * 6.37)
    }
    else if(secondCurrency == "EURO"){
        console.log(moneyAmount * 0.92)
    }else (secondCurrency == "BITCOIN");{
        console.log(moneyAmount * 0.0000024)
    }
}




