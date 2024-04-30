// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var input = "12 1 5.30\n16 2 5.10 "

function codigo (input){
var lines = input.split('\n')
let data1 = separa(lines[0])
let data2 = separa(lines[1])

  let total1 = (data1[1] * data1[2] ) 
  let total2 = ( data2[1] * data2[2] )
let total3 = total1 + total2

return  console.log("VALOR A PAGAR: R$",total3.toFixed(2))
}

function separa(linha){
    let elementos  = linha.split(" ")
    let el1 = Number(elementos[1])
    let el2 = parseFloat(elementos[2])
    let el0 = elementos[0]

return [el0,el1,el2]     
}
codigo(input)

export{codigo,separa}
