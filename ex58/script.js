let number = Number(prompt('Digite um número inteiro para ver seu fatorial'))
let fatorial = 1;

//verificações
if(number === 1 || number === 0){
    fatorial == 1
    console.log(`O fatorial de ${number} é igual a ${fatorial}`)
}
else{
    for(let i = 2; i <= number; i++){
        fatorial = fatorial * i
    }
    console.log(`O fatorial de ${number} é igual a ${fatorial}`)
}