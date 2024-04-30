export function toString(algarismo){
    let resposta;
    if (typeof(algarismo) == 'string' || typeof(algarismo)  == 'boolean') {
        algarismo 
        return "erro"
    }
    if(algarismo >= 10  || algarismo <= -1 ) resposta = "erro"
    if (isNaN(algarismo) ) resposta = "erro"
    if(algarismo == 0) resposta = "zero"
    if(algarismo == 1) resposta = "um"
    if(algarismo == 2) resposta = "dois"
    if(algarismo == 3) resposta = "tres"
    if(algarismo == 4) resposta = "quatro"
    if(algarismo == 5) resposta = "cinco"
    if(algarismo == 6) resposta = "seis"
    if(algarismo == 7) resposta = "sete"
    if(algarismo == 8) resposta = "oito"
    if(algarismo == 9) resposta = "nove"
    
    return resposta;
}