// Criar um prompt para o usuário digitar o número de elementos do array
const elementos = Number(prompt('Digite a quantidade de elementos'))

// criar a vetor vazio
let vetor = []

// Loop para inserir os valores no vetor
for(let i = 0; i < elementos; i++){
    const valores = Number(prompt(`Digite o valor ${i+1}:`))
    vetor.push(valores)
}

// variável para guardar o valor da soma
let soma = 0;
let media;

// Loop para percorrer o vetor, realizar a soma e tirar a média
for(let i = 0; i < vetor.length; i++){
    soma = soma + vetor[i]
    media = soma / elementos
}
console.log(soma, media)