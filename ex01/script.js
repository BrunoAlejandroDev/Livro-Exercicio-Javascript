const num1 = Number(prompt(`Digite um número`))
const num2 = Number(prompt(`Digite outro número`))

function calculadora(a, b){
    const soma = a+b
    console.log(soma)

    const subtracao = a-b;
    console.log(subtracao)

    const multiplicacao = a*b;
    console.log(multiplicacao)

    const divisao = a/b;
    console.log(divisao)
}
calculadora(num1, num2)