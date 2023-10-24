let raio = Number(prompt('Digite o valor do raio para calcular a área.'))

const areaCirculo = () =>{
    let calcular = Math.PI*Math.pow(raio,2)
    return calcular.toFixed(2)
}

alert(areaCirculo())