let num1 = Number(prompt('Digite o primeiro valor'))
let num2 = Number(prompt('Digite o segundo valor'))
let num3 = Number(prompt('Digite o terceiro valor'))

if(num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1){
    console.log('Os valores podem ser lados de um triângulo')
}
else{
    console.log('Os valores não podem ser lados de um triângulo')
}