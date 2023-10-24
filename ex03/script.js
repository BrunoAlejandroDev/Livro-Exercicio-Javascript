let nota1 = Number(prompt('Digite a primeira nota'))
let nota2 = Number(prompt('Digite a segunda nota'))
let nota3 = Number(prompt('Digite a terceira nota'))

function mediaAritmetica(){
    let total = (nota1 + nota2 + nota3)/3
    return total.toFixed(2)
}
alert(`A média aritmética é: ${mediaAritmetica()}`)