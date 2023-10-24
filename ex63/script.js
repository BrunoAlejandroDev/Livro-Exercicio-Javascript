let numbers = []
let number;

do{
    number = Number(prompt('Digite um número (zero para sair)'))

    if(number !== 0 && !isNaN(number)){
        numbers.push(number)
    }
}while(number !== 0)

if(numbers.length > 0){
    let min = numbers[0]
    let max = numbers[0]

    for(let i = 1; i < numbers.length; i++){
        let num = numbers[i]

        if(num < min){
            min = num
        }
        if(num > max){
            max = num
        }
    }
    console.log(min)
    console.log(max)
}
else{
    console.log('Nenhum número foi digitado')
}