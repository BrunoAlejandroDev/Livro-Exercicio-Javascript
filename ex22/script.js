let nome = prompt('Digite seu nome completo abaixo')

//separar cada parte do nome e retorná-los como array
let separarNome = nome.split(" ")

//obtendo o primeiro nome
let primeiroNome = separarNome[0]

console.log(`Seu primeiro nome é ${primeiroNome}`)