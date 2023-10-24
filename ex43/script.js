let number = parseInt(prompt('Digite um número inteiro'))

//função para verificar divisibilidade
function divisivelPor3e5(num){
    if(isNaN(num)){
        alert('Digite um número válido')
    }
    else if(num % 3 === 0 && num % 5 === 0){
        console.log(`O número ${num} é divisível por 3 e por 5`)
    }
    else if(num % 3 === 0 && num % 5 != 0){
        console.log(`O número ${num} é divisível por 3 mas não é divisível por 5`)
    }
    else if(num % 3 != 0 && num % 5 === 0){
        console.log(`O número ${num} não é divisível por 3 mas é divisível por 5`)
    }
    else{
        console.log(`O número ${num} não é divisível por 3 e por 5`)
    }
}
divisivelPor3e5(number)