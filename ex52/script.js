let number = Number(prompt('Digite um número'))

if(isNaN(number) || number < 1){
    alert('Digite um valor válido ou maior/igual a 1')
}
else{
    let soma = 0;
    for(let i = 1; i<=number; i++){
        soma = soma + i
        console.log(soma)
    }
}