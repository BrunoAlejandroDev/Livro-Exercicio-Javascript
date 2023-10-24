let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let num3 = Number(prompt('Digite o terceiro número'))

let maior = num1;

if(num2 > maior){
    maior = num2;
}
if(num3 > maior){
    maior = num3
}
alert(`O maior valor digitado foi: ${maior}`)