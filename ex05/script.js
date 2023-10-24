let peso = Number(prompt('Digite o seu peso'))
let altura = Number(prompt('Digite a sua altura'))
let container_resposta = document.querySelector('.container_resposta')

function calcularIMC(){
    let calcular = peso/Math.pow(altura, 2)
    return calcular.toFixed(2)
}
container_resposta.innerHTML = `Seu IMC é: ${calcularIMC()}`