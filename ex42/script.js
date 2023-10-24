let altura = Number(prompt('Digite sua altura'))
let peso = Number(prompt('Digite seu peso'))

//função para calcular o IMC
let IMC = (altura, peso) => {
    let calcularIMC = peso/(Math.pow(altura, 2)).toFixed(2)
    if(calcularIMC < 18.5){
        console.log(`Seu IMC é ${calcularIMC.toFixed(2)}, você está abaixo do peso ideal`)
    }
    else if(calcularIMC >= 18.5 && calcularIMC <= 24.9){
        console.log(`Seu IMC é ${calcularIMC.toFixed(2)}, você está no peso ideal. Parabéns`)
    }
    else if(calcularIMC > 25 && calcularIMC <= 29.9){
        console.log(`Seu IMC é ${calcularIMC.toFixed(2)}, você está levemente acima do peso ideal.`)
    }
    else if(calcularIMC > 30 && calcularIMC <= 34.9){
        console.log(`Seu IMC é ${calcularIMC.toFixed(2)}, você apresenta obesidade grau I`)
    }
    else if(calcularIMC > 35 && calcularIMC <= 39.9){
        console.log(`Seu IMC é ${calcularIMC.toFixed(2)}, você apresenta obesidade grau II (severa)`)
    }
    else{
        console.log(`Seu IMC é ${calcularIMC.toFixed(2)}, você apresenta obesidade grau III (mórbida)`)
    }
}
IMC(altura, peso)