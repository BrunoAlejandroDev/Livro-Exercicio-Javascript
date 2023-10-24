// let num1 = Number(prompt('Digite um número'))
// let num2 = Number(prompt('Digite outro número'))

// function mediaAritmetica(){
//     let total = (num1 + num2)/2
//     return total
// }
// alert(`A média aritmética é: ${mediaAritmetica()}`)

//OUTRA FORMA DE FAZER
const valores = []

//loop para inserção de valores
while(true){
    const entrada = prompt('Digite um número. Para sair, basta digitar "fim"')

    //verificação da entrada 
    if(entrada.toLowerCase() === 'fim'){
        break;
    }
    
    //convertendo a entrada para number
    const valor = Number(entrada)

    //adicionando os valores no array
    if(!isNaN(valor)){
        valores.push(valor)
    }
    else{
        alert('Valor inválido, digite um valor válido para usar o programa')
    }
}

//calculando a soma dos valores
if(valores.length === 0){
    alert('Nenhum valor foi inserido')
}
else{
    let soma = 0;
    for(let valor of valores){
        soma += valor 
    }

    //calculando a média
    const media = soma / valores.length

    //exibindo o valor final    
    alert(`A média dos valores foi: ${media}`)
}

