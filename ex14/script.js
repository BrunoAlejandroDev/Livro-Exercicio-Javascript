//d=√((x_2-x_1)²+(y_2-y_1)²)
alert('Olá, bem vindo a calculadora de distância entre pontos')

let x1 = Number(prompt('Digite a coordenada x do primeiro ponto'))
let x2 = Number(prompt('Digite a coordenada y do primeiro ponto'))
let y1 = Number(prompt('Digite a coordenada x do segundo ponto'))
let y2 = Number(prompt('Digite a coordenada y do segundo ponto'))

function calcularDistancia(ax1,bx2,cy1,dy2){
    let calcularDistancia = Math.sqrt(Math.pow(bx2 - ax1, 2) + Math.pow(dy2 - cy1, 2))
    return calcularDistancia.toFixed(2)
}
console.log(`O valor da distância entre os pontos é de: ${calcularDistancia(x1, x2, y1, y2)}`)