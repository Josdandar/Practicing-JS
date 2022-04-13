

function convertirPalabra(palabraParaCovertir) {
    // kodemia
    let result = '';
   for (let index = 0; index < palabraParaCovertir.length; index++) {
        if(index % 2 === 0){
            result += palabraParaCovertir[index].toUpperCase();
        } else{
            result += palabraParaCovertir[index].toLowerCase()
        }
   }

   console.log(result)
    
}

// personas[2];

//toUpperCase convuete unstring a maysuculas
//toLowerCase convuete unstring a manisculas

convertirPalabra(palabra);