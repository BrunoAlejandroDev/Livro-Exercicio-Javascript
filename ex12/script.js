alert('Olá, seja bem vindo a calculadora de energia cinética, pressione "ok" para continuar')

let massa = Number(prompt('Digite o valor da massa'))
let velocidade = Number(prompt('Digite o valor da velocidade'))

function calcularEnergiaCinetica(massa, velocidade){
    let calcularEC = Math.pow((massa*velocidade), 2) / 2;
    return calcularEC
}

console.log(`O valor da energia cinética é: ${calcularEnergiaCinetica(massa, velocidade)}`)