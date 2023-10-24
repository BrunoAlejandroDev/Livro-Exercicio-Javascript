let raio = Number(prompt('Insira o valor do raio da esfera'))

let calcularVolume = (r)=>{
    let calcularV = (4/3) * Math.PI * Math.pow(r, 3)
    return calcularV.toFixed(2)
}

console.log(`O valor do volume é de: ${calcularVolume(raio)}`)