let number = Number(prompt('Digite um número'))

//função para verificar se o número é primo ou não
function isPrimo(num){
    if(number<2){
        return false
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % 2 === 0){
            return false
        }
    }
    return true
}

//exibir os números primos
let contador = 0;
let i = 2;
while(contador < number){
    if(isPrimo(i)){
        console.log(i, contador)
        contador++
    }
    i++
}