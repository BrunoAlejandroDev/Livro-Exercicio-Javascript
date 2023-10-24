let nome = prompt('Digite seu nome')

// passando tudo para minúsculo
nome = nome.toLowerCase()

//usando split para separar o nome em partes
let separarNome = nome.split(' ')
console.log(separarNome)

// pegando somente o último nome, ou seja, o último elemento do array
let sobrenome = separarNome.pop();
console.log(sobrenome)

// alterando a posição do último nome (elemento) e colocando ele no início do array
separarNome.unshift(sobrenome)
console.log(separarNome)

// alterando o array para string
let nomeInvertido = separarNome.join(' ')
console.log(nomeInvertido)