let largura = Number(prompt('Digite o valor da largura'));
let comprimento = Number(prompt('Digite o valor do comprimento'));

let retangulo = ()=>{
    let calcularPer = 2*(largura+comprimento).toFixed(2)
    console.log(`O valor do comprimento é de: ${calcularPer}`)

    let calcularArea = largura * comprimento.toFixed(2)
    console.log(`O valor da área é de: ${calcularArea}`)
}

retangulo();