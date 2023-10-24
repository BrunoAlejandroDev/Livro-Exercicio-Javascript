let a = Number(prompt('Digite o valor de A'))
let b = Number(prompt('Digite o valor de B'))
let c = Number(prompt('Digite o valor de C'))

function calcularDelta(){
    let calcular = Math.pow(b,2) - 4 * a * c
    return calcular
}
console.log(`O valor do delta foi: ${calcularDelta()}`)

if(calcularDelta() > 0){
    let raiz1 = (-b + Math.sqrt(calcularDelta())) / (2*a)
    let raiz2 = (-b - Math.sqrt(calcularDelta())) / (2*a)
    console.log(`O valor da primeira raiz é: ${raiz1.toFixed(2)}\nO valor da segunda raiz é: ${raiz2.toFixed(2)}`)
}
else if(calcularDelta() === 0){
    let raiz = -b / (2*a)
    console.log(`O valor da raiz é de: ${raiz.toFixed(2)}`)
}
else{
    alert('A equação não possui raízes reais pois o delta é negativo')
}