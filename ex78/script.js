const elementos = parseInt(prompt('Digite quantos elementos terá no vetor'))

// criando o vetor
let array = [];

// pedindo ao usuários os valores e inserindo no vetor
for(let i = 0; i < elementos; i++){
    const valores = parseInt(prompt(`Digite o valor ${i}`))
    array.push(valores)
}

// pedindo um número para ser localizado dentro do array
const valorUsuario = parseInt(prompt('Digite o número a ser encontrado'));

// variável contadora
let contador = 0;

// percorre o vetor e verifica cada elemento para encontrar um que seja igual ao dito pelo usuário
for(let i = 0; i < array.length; i++){
    if(array[i] === valorUsuario){
        contador++
    }
}
console.log(contador)