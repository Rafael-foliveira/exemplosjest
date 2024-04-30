export function mediaponderada(n1,n2,n3,n4,p1=1,p2=2,p3=3,p4=4){


return ((n1*p1)+(n2*p2)+(n3*p3)+(n4*p4))/(p1*1+p2*1+p3*1+p4*1)? "Aprovado":"Reprovado"
}

export function verificamedia(presenca,media){ 
    if (presenca >=0.75 && media  >= 7  ){
    return   "Aprovado"
    }
    else {
    return "Reprovado" 
    }

}

export function main(n1,n2,n3,n4,presenca,p1=1,p2=2,p3=3,p4=4){
    let media = mediaponderada(n1*p1)+(n2*p2)+(n3*p3)+(n4*p4)
    let resultado = verificamedia(presenca, media)
    return resultado 
}
