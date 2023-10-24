alert('Olá, bem vindo a calculadora de trabalho realizado por uma força')

let forca = Number(prompt('Digite o valor da força aplicada'))
let distancia = Number(prompt('Digite o valor da distância percorrida pelo objeto'))

function calcularTrabalhoRealizado(forca, distancia){
    let calcularF = forca * distancia
    return calcularF
}
console.log(`O valor do trabalho realizado por uma força foi: ${calcularTrabalhoRealizado(forca, distancia)}`)