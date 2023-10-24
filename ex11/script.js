let varEspaco = Number(prompt('Digite o valor da variação do espaço (delta S)'))
let varTempo = Number(prompt('Digite o valor da variação do tempo (delta T)'))

function calcularVelMedia(espaco, tempo){
    let calcular = espaco / tempo
    return calcular
}
console.log(`O valor da velocidade média foi: ${calcularVelMedia(varEspaco, varTempo)}`)