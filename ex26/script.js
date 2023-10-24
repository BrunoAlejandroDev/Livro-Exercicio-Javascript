let idade = Number(prompt('Digite sua idade'))

if(idade <= 0 || idade > 100){
    alert('Idade inválida')
}
else if(idade >= 18){
    alert('Você é maior de idade')
}
else{
    alert('Você é menor de idade')
}