test('divisao', () => {
    let a = 8; 
    let b = 2;

    let resultado = divisao(a,b);

    expect(resultado).toBe(4);
})

function divisao (a,b) {
    return a/b
}