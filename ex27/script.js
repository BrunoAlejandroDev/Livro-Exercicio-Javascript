let number1 = Number(prompt('Digite um número'))
let number2 = Number(prompt('Digite outro número'))

if(number1 > number2){
    alert(`O número ${number1} é maior que o número ${number2}`)
}
else if(number1 < number2){
    alert(`O número ${number1} é menor que o número ${number2}`)
}
else{
    alert('Os números são iguais')
}