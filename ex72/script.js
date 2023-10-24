// Criar um prompt para o usuário informar a quantidade de elementos do vetor
const elementos = Number(prompt('Digite a quantidade de elementos do vetor'))

// Criar um vetor vazio para guardar os valores digitados pelo usuário
let vetor = []

// Loop para inserir os valores digitados pelo usuário no vetor
for(let i = 0; i < elementos; i++){
    const valores = Number(prompt(`Digite o valor ${i+1}:`))
    vetor.push(valores)
}

// Variável para ser usada como comparação iniciada com o primeiro elemento do vetor 
let maior = vetor[0]

// Loop para comparar cada valor do vetor com a variável "maior"
for(let i = 0; i < vetor.length; i++){
    if(vetor[i] > maior){
        maior = vetor[i]
    }
}
console.log(maior)