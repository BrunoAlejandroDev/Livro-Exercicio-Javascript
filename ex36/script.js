let pessoa1 = Number(prompt('Digite a primeira Idade'))
let pessoa2 = Number(prompt('Digite a segunda Idade'))
let pessoa3 = Number(prompt('Digite a terceira Idade'))

if(pessoa1 >= 18 && pessoa2 >= 18 && pessoa3 >= 18){
    console.log('Todas as pessoas são maiores de idade')
}
else if(pessoa1 >= 18 || pessoa2 >= 18 || pessoa3 >= 18){
    console.log('Pelo menos uma pessoa é maior de idade')
}
else{
    console.log('Todas as pessoas são menores de idade')
}