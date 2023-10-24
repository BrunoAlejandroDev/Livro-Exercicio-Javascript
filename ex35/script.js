let respostaMaior = document.querySelector('.maior')
let respostaMenor = document.querySelector('.menor')
let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let num3 = Number(prompt('Digite o terceiro número'))

function estadoMaior(n1, n2, n3){
    let maior = n1;

    if(n2 > maior){
        maior = n2
    }
    if(n3 > maior){
        maior = n3
    }
    respostaMaior.innerHTML = `O maior valor entre os números digitados foi: ${maior}`
}
estadoMaior(num1, num2, num3)

function estadoMenor(n1, n2, n3){
    let menor = n1;
    console.log(`1: ${menor}`)

    if(n2 < menor){
        menor = n2
        console.log(`2: ${menor}`)
    }
    if(n3 < menor){
        menor = n3
        console.log(`3: ${menor}`)
    }
    respostaMenor.innerHTML = `O menor valor entre os números digitados foi: ${menor}`
}
estadoMenor(num1, num2, num3)