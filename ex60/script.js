let soma = 0;
let number = Number(prompt('Digite um número'))

while(number >= 0){
    soma = soma + number
    console.log(soma)
    number = Number(prompt('Digite um número'))
    
    if(number < 0){
        break
    }
}