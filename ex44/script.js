let idade = Number(prompt('Digite a sua idade'))

function verificaIdade(age){
    if(isNaN(age) || age < 0){
        alert('Insira um valor válido')
    }
    else if(age >= 0 && age < 2){
        console.log(`Você tem ${age} anos e é um bebê.`)
    }
    else if(age >= 3 && age <= 12){
        console.log(`Você tem ${age} anos e é uma criança.`)
    }
    else if(age >= 13 && age <= 18){
        console.log(`Você tem ${age} anos e é um adolescente.`)
    }
    else if(age >= 19 && age <= 59){
        console.log(`Você tem ${age} anos e é um adulto.`)
    }
    else{
        console.log(`Você tem ${age} anos e é idoso.`)
    }
}
verificaIdade(idade)