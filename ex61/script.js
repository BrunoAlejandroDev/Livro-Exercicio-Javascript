let number = Number(prompt('Digite um número'))
let numeroAnterior = 0;
let numeroAtual = 1;

while(numeroAtual <= number){
    console.log(numeroAtual)

    let proxNumero = numeroAnterior + numeroAtual
    numeroAnterior = numeroAtual;
    numeroAtual = proxNumero;  
}