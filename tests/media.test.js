import { verificaMedia } from "./media"

describe('Media de notas ', ()=>{
    test('caso seja 8,10,5,5', () => {
        let n1 = 8;
        let n2 = 10;
        let n3 = 5;
        let n4 = 5;
        let resultado = verificaMedia(n1,n2,n3,n4)
        expect (resultado).toBe("Aprovado")
    });
    test('caso seja 8,9,5,5', () => {
        let n1 = 8;
        let n2 = 9;
        let n3 = 5;
        let n4 = 5;
        let resultado = verificaMedia(n1,n2,n3,n4)
        expect (resultado).toBe("Reprovado")
    });
    test('caso seja 8.5,8,7,6.5', () => {
        let n1 = 8.5;
        let n2 = 8;
        let n3 = 7;
        let n4 = 6.5;
        let resultado = verificaMedia(n1,n2,n3,n4)
        expect (resultado).toBe("Aprovado")
    });
    test('caso seja "7","8","9","10"', () => {
        let n1 = '7';
        let n2 = '8';
        let n3 = '9';
        let n4 = '10';
        let resultado = verificaMedia(n1,n2,n3,n4)
        expect (resultado).toBe("Aprovado")
    });
    test('caso seja "1","1","1","1"', () => {
        let n1 = '1';
        let n2 = '1';
        let n3 = '1';
        let n4 = '1';
        let resultado = verificaMedia(n1,n2,n3,n4)
        expect (resultado).toBe("Reprovado")
    });
});