let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let num3 = Number(prompt('Digite o terceiro número'))

let somarNumero = (n1,n2,n3) =>{
    let soma = n1 + n2 + n3;

    if(soma%5 === 0){
        alert(`A soma dos números ${n1}, ${n2} e ${n3} é igual a ${soma} e é número divisível por 5`)
    }
    else{
        alert(`A soma dos números ${n1}, ${n2} e ${n3} é igual a ${soma} e não é um número divisível por 5`)
    }
}
somarNumero(num1, num2, num3)