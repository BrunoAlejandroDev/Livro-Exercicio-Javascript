let number1 = Number(prompt('Digite o primeiro número'))
let number2 = Number(prompt('Digite o segundo número'))

if(isNaN(number1, number2) || number1 < 0 || number2 < 0){
    alert('Digite um valor válido')
}
else if(number1 % number2 === 0){
    console.log(`O número ${number1} é divisível pelo número ${number2}`)
}
else{
    console.log(`O número ${number1} não é divisível pelo número ${number2}`)   
}