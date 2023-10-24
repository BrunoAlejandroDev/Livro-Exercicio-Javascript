let soma = 0;
let contador = 0;
let number = Number(prompt('Digite um número (digite 0 para sair)'));

if(isNaN(number) || number === 0){
    alert('Digite um valor válido')
}
else{
    while(number !== 0){
        soma = soma + number
        contador++;
        console.log(soma, contador)
        number = Number(prompt('Digite um número (digite 0 para sair)'));
    
        if(number === 0){
            let media = soma / contador;
            console.log(`Média dos números: ${media}`)
            break
        }
    }
}