let raio = Number(prompt('Digite o raio do círculo para calcular o perímetro'))

function calcularPerimetro(){
    let calcular = 2*Math.PI*raio
    return calcular.toFixed(2)
}
console.log(calcularPerimetro())
alert(`O perímetro do círculo é: ${calcularPerimetro()}`)