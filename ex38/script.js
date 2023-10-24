//obter o ano atual
let anoAtual = new Date().getFullYear()
console.log(anoAtual)

//ano de nascimento da pessoa
let anoNascimento = Number(prompt('Digite o ano do seu nascimento'))

// calculando a idade
let idade = anoAtual - anoNascimento

//verificando se pode votar
if(isNaN(anoNascimento) || anoNascimento < 1940 || anoNascimento > anoAtual){
    console.log('erro')
}
else if(idade >= 18 && idade <= 79){
    alert(`Sua idade é ${idade}, você está apto para votar!`)
}
else if(idade >= 80){
    alert(`Sua idade é ${idade}, você está apto para votar, mas não é obrigatório!`)
}
else{
    alert(`Sua idade é ${idade}, não não está apto para votar!`)
}