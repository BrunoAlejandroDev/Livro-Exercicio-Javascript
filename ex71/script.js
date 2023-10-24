let array = [1,2,3,4,5]
console.log(array)

let soma = 0
for(let i = 0; i < array.length; i++){
    soma = soma + array[i]
}
console.log(soma)

/* OUTRA FORMA DE FAZER */
const elementos = Number(prompt('Digite a quantidade de elementos do vetor'))

// criando um vetor vazio que vai receber os valores
let vetor = []

// criando uma estrutura de repetição para preencher o vetor com o valores informados pelo usuário
for(let i = 0; i < elementos; i++){
    const valores = Number(prompt(`Digite o valor ${i+1}:`))
    vetor.push(valores)
}

// somando todos os elementos do vetor
let sum = 0;
for(let i = 0; i < vetor.length; i++){
    sum = sum + vetor[i]
}
console.log(sum)