test('subtracao', () => {
    let a = 2; 
    let b = 10;

    let resultado = soma(a,b);

    expect(resultado).toBe(-8);
})

function soma (a,b) {
    return  a-b
}