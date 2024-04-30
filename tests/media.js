export function verificaMedia(n1,n2,n3,n4){
    // let resultado = (Number(n1)+Number(n2)+Number(n3)+Number(n4))/4
    let resultado = ((n1/4)+(n2/4)+(n3/4)+(n4/4))

    if(resultado <7 ) {
        return "Reprovado"
    }

    else {
        return "Aprovado"
    }
    
    }