let lado1 = Number(prompt('Digite o valor do primeiro lado'))
let lado2 = Number(prompt('Digite o valor do segundo lado'))
let lado3 = Number(prompt('Digite o valor do terceiro lado'))
let altura = Number(prompt('Digite o valor da altura'))

function calcularPerimetro(a,b,c){
    let calcular = a + b + c
    return calcular
}
console.log(`O valor do perimetro do triangulo é: ${calcularPerimetro(lado1, lado2, lado3)}`)

function calcularArea(b, h){
    let calcular = (b*h)/2;
    return calcular
}
console.log(`O valor da área do triangulo é: ${calcularArea(lado2, altura)}`)