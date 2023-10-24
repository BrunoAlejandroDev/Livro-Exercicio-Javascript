let respostaSoma = document.querySelector('.resposta')
let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let num3 = Number(prompt('Digite o terceiro número'))

function estadoSoma(n1, n2, n3){
    let soma = n1+n2+n3;

    if(soma > 0){
        respostaSoma.innerHTML = `A soma dos números foi igual a ${soma} e é um número positivo`
    }
    else if(soma < 0){
        respostaSoma.innerHTML = `A soma dos números foi igual a ${soma} e é um número negativo`
    }
    else{
        respostaSoma.innerHTML = `A soma dos números foi igual a ${soma}`
    }
}
estadoSoma(num1, num2, num3)