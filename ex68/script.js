const numero1 = Number(prompt('Digite o primeiro valor'))
const numero2 = Number(prompt('Digite o segundo valor'))

// ENCONTRANDO QUAL DOS NÚMEROS É O MAIOR
let maiorNumero;
if(numero1 > numero2){
    maiorNumero = numero1
}
else{
    maiorNumero = numero2
}

// DEFININDO O MMC COMO O MAIOR NUMERO
let mmc = maiorNumero;

// LOOP PARA ENCONTRAR O MMC
while(true){
    if(mmc % numero1 === 0 && mmc % numero2 === 0){
        break
    }
    mmc += maiorNumero
}

console.log(`O mmc de ${numero1} e ${numero2} é: ${mmc}`)