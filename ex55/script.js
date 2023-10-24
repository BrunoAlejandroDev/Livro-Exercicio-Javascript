let number = Number(prompt('Digite um número'))
let primo = true;

for(let i = 2; i <= number/2; i++){
    if(number % i === 0){
        primo = false
        break
    }
}

if(primo){
    console.log('É primo')
}
else{
    console.log('Não é primo')
}