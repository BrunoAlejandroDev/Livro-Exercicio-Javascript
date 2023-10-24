// quantidade de elementos do vetor
const elementos = parseInt(prompt('Digite a quantidade de elementos do vetor'))

// criando o vetor que vai receber esses elementos
let array = []

// inserindo valores no vetor "array"
for(let i = 0; i < elementos; i++){
    const valores = parseInt(prompt(`Digite o valor ${i}:`))
    array.push(valores)
}

// percorrendo o vetor e exibindo a ordem inversa
for(let i = array.length-1; i >= 0; i--){
    console.log(array[i])   
}

// usando reverse
array.reverse()
console.log(array)