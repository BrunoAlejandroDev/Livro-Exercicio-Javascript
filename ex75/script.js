// pedindo a quantidade de índices do vetor
const indice = parseInt(prompt("Digite a quantidade de elementos do vetor"))

// criando um vetor vazio para armazenar os valores
let array = [];

// loop para preencher o vetor "array"
for(let i = 0; i < indice; i++){
    const valores = parseInt(prompt(`Digite o valor da posição ${i}`))
    array.push(valores)
}

// variável para verificar se está em ordem crescente
let ordemCrescente = true

// loop para percorrer o vetor
for(let i = 0; i < array.length; i++){
    if(array[i] > array[i+1]){
        ordemCrescente = false
        break
    }
}

if(ordemCrescente){
    console.log(`Está em ordem crescente`)
}
else{
    console.log(`Não está em ordem crescente`)
}