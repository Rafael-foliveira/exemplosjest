test('multiplicacao', () => {
    let a = 2; 
    let b = 10;

    let resultado = soma(a,b);

    expect(resultado).toBe(20);
})

function soma (a,b) {
    return a*b
}