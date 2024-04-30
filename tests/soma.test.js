
describe('soma', () => {
    describe("A soma de dois numeros inteiros deverá resultar em um inteiro.", () => {
    });
    test("Soma de 3 e 5 deve ser igual a 8", () =>{
        expect(soma(3,5)).toBe(8)
    });
    test("Soma de 10 e 2 deve ser igual a 12", () =>{
        expect(soma(10,2)).toBe(12)
    }); 
    });
    test("Soma de 0 e 0 deve ser igual a 0", () =>{
        expect(soma(0,0)).toBe(0)
    }); 
    
    

describe('soma', () => {
    describe("A soma de duas string deverá resultar em um inteiro.", () => {
    });
    test("Soma de 3 e 5 deve ser igual a 8", () =>{
        expect(soma('3','5')).toBe(8)
    });
    });
    test("Soma de 10 e 2 deve ser igual a 12", () =>{
        expect(soma('10','2')).toBe(12)
    });
    test("Soma de 0 e 0 deve ser igual a 8", () =>{
        expect(soma('0','0')).toBe(0)
    });

    


describe('soma', () => {
    describe("A soma de um literal e um inteiro deverá resultar em um inteiro.", () => {
    });
    test("Soma de 3 e 5 deve ser igual a 8", () =>{
        expect(soma('3',5)).toBe(8)
    });
    test("Soma de 10 e 2 deve ser igual a 12", () =>{
        expect(soma('10','2')).toBe(12)
    }); 
    });
    test("Soma de 0 e 0 deve ser igual a 0", () =>{
        expect(soma('0','0')).toBe(0)
    }); 


describe('soma', () => {
    describe("A soma de duas strings deve exibir uma mensagem de erro.", () => {
    });
    test("Soma de abc e 2 deve retornar uma mensagem de erro", () =>{
        expect(() => soma('abc','2')).toThrow("Erro um ou mais parametros com tipos não suportados")
    });
    }) 
    
    function soma (a,b) {
    
        if (isNaN(a) || isNaN(b)) {
            throw("Erro um ou mais parametros com tipos não suportados")
        }
        return Number(a)+Number(b)
    }   
    

    test('soma2',() => {
        expect(2+2).toBe(4)
    });
    