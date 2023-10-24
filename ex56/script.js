let number = Number(prompt('digite um número'))

for(let i = 2; i < number; i++){
    let isPrimo = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            isPrimo = false
            break
        }
    }
    if(isPrimo){
        console.log(i)
    }
}