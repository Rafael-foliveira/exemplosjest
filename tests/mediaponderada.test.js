import { mediaponderada, verificamedia, main } from "./mediaponderada"
describe('Media de notas ', ()=>{
    test('caso 1', () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;
        let resultado = mediaponderada (n1,n2,n3,n4)
        expect (resultado).toBe("Aprovado")
    });
    test('caso 2', () => {
        let n1 = 7;
        let n2 = 7;
        let n3 = 7;
        let n4 = 7;
        let resultado = mediaponderada(n1,n2,n3,n4,)
        expect (resultado).toBe("Aprovado")
    });
    test('caso 3', () => {
        let n1 = 5;
        let n2 = 8.9;
        let n3 = 5;
        let n4 = 9;
        let resultado = mediaponderada(n1,n2,n3,n4)
        expect (resultado).toBe("Aprovado")
    });
    test('caso 3', () => {
        let n1 = '2';
        let n2 = '1';
        let n3 = '3';
        let n4 = '1';
        let resultado = main(n1,n2,n3,n4)
        expect (resultado).toBe("Reprovado")
    });
    test('caso 3', () => {
        let n1 = '7';
        let n2 = '1';
        let n3 = '5';
        let n4 = '2';
        let resultado = mediaponderada(n1,n2,n3,n4)
        expect (resultado).toBe("Aprovado")
    });
    test('caso 3', () => {
        let n1 = '5';
        let n2 = '8.9';
        let n3 = '5';
        let n4 = '9';
        let resultado = mediaponderada(n1,n2,n3,n4)
        expect (resultado).toBe("Aprovado")
    });
});
describe('Media ponderada', ()=>{
    test('caso 1.1', () => {
        let n1 = 5;
        let n2 = 5;
        let n3 = 5;
        let n4 = 5;
        let p1 = 1;
        let p2 = 2;
        let p3 = 3;
        let p4 = 4;
        let resultado = main(n1,n2,n3,n4,p1,p2,p3,p4)
        expect (resultado).toBe("Reprovado")
    });
    test('caso 1.1', () => {
        let nota = [5,5,5,5]
        let peso = [1,2,3,4]
        let resultado = main(nota,peso)
        expect (resultado).toBe("Reprovado")
    });
    test('caso 1.1', () => {
        let nota = [8,8,8,8]
        let p1 = 1;
        let p2 = 2;
        let p3 = 3;
        let p4 = 4;
        let resultado = main(nota,p1,p2,p3,p4)
        expect (resultado).toBe("Reprovado")
    });
    test('caso 1.1', () => {
        let nota = [1,1,1,1]
        let p1 = 1;
        let p2 = 2;
        let p3 = 3;
        let p4 = 4;
        let resultado = main(nota,p1,p2,p3,p4)
        expect (resultado).toBe("Reprovado")
    });
    test('caso 1.1', () => {
        let n1 = '5';
        let n2 = '5';
        let n3 = '5';
        let n4 = '5';
        let p1 = '1';
        let p2 = '2';
        let p3 = '3';
        let p4 = '4';
        let resultado = main(n1,n2,n3,n4,p1,p2,p3,p4)
        expect (resultado).toBe("Reprovado")
    });
    test('caso 1.2', () => {
        let n1 = 8;
        let n2 = 8;
        let n3 = 8;
        let n4 = 8;
        let p1 = '1';
        let p2 = '2';
        let p3 = '3';
        let p4 = '4';
        let resultado = mediaponderada(n1,n2,n3,n4,p1,p2,p3,p4)
        expect (resultado).toBe("Aprovado")
    });
    test('caso 1.3', () => {
        let n1 = 8;
        let n2 = 7;
        let n3 = 5;
        let n4 = 6;
        let p1 = '1';
        let p2 = '2';
        let p3 = '3';
        let p4 = '4';
        let resultado = mediaponderada(n1,n2,n3,n4,p1,p2,p3,p4)
        expect (resultado).toBe("Aprovado")
    });
    test('caso 1.4', () => {
        let n1 = '8';
        let n2 = '7';
        let n3 = '5';
        let n4 = '6';
        let p1 = '1';
        let p2 = '2';
        let p3 = '3';
        let p4 = '4';
        let resultado = mediaponderada(n1,n2,n3,n4,p1,p2,p3,p4)
        expect (resultado).toBe("Aprovado")
    });
    test('caso 1.5', () => {
        let nota = [8,8,8,8]
        let peso = [1,2,3,4]
        let resultado = mediaponderada(nota, peso )
        expect (resultado).toBe("Reprovado")
    });
});
describe('verifica presenca', ()=>{
    test('caso 1.1', () => {
        let media = 8
        let presenca = 0.80
        let resultado = verificamedia(presenca,media)
        expect (resultado).toBe("Aprovado")
    });
    test('caso 1.2', () => {
        let media = 8
        let presenca = 0.75
        let resultado = verificamedia(presenca,media)
        expect (resultado).toBe("Aprovado")
    });
    test('caso 1.3', () => {
        let media = 4
        let presenca = 0.90
        let resultado = verificamedia(presenca,media)
        expect (resultado).toBe("Reprovado")
    });
    test('caso 1.4', () => {
        let media = 8
        let presenca = 0.60
        let resultado = verificamedia(presenca,media)
        expect (resultado).toBe("Reprovado")
    });
    test('caso 1.5', () => {
        let media = '8'
        let presenca = '0.80'
        let resultado = verificamedia(presenca,media)
        expect (resultado).toBe("Aprovado")
    }); 
});


