/*
Ejercicio 2:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

let string1 = prompt("Write down a text")
let string2 = prompt("Write down another text")

if(string1.length>string2.length){
  console.log("This is the largest string: " +string1)
}else{
  console.log("This is the largest string: " +string2)
}