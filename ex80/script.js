// pedindo ao usuário a quantidade de elementos do vetor
const elementos = parseInt(prompt('Digite a quantidade de elementos do vetor'))

// criando um vetor vazio
let array = [];

// criando um alaço for para pedir os valores dos elementos do vetor
for(let i = 0; i < elementos; i++){
    const valores = parseInt(prompt(`Digite o valor ${i}:`))
    array.push(valores)
}
console.log(array)

// criando um variável com valor true como padrão
let todosPares = true;

// criando um laço para percorrer o array e verificar se todos os valores são número pares
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
        todosPares = false
        console.log(`Número ímpar: ${array[i]}`)
    }
}

// exibir o resultado da verificação
if(todosPares){
    console.log(`Todos os valores do array são pares`)
}
else{
    console.log('O array contém elementos ímpares')
}