let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))

//organizando os números em ordem crescente
if(num1 < num2){
    for(let i = num1 + 1; i < num2; i++){
        console.log(i)
    }
}
//organizando em ordem decrescente
else if(num1 > num2){
    for(let i = num1 - 1; i > num2; i--){
        console.log(i)
    }
}
//números iguais
else{
    console.log('Os números são iguais')
}