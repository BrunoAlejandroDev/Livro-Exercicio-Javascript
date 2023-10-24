const elemento = Number(prompt('Digite a quantidade de elementos dos vetores'))

// criando dois vetores vazios
let array1 = [];
let array2 = [];

// Loop para preencher os dois vetores
for(let i = 0; i < elemento; i++){
    // primeiro array
    const valores1 = Number(prompt(`Digite o valor ${i} do primeiro array`))
    array1.push(valores1)
}

for(let i = 0; i < elemento; i++){
    // segundo array
    const valores2 = Number(prompt(`Digite o valor ${i} do segundo array`))
    array2.push(valores2)
}

// novo vetor para guardar a soma
let vetorSoma = []

// loop para calcular a soma dos elementos correspondentes
for(let i = 0; i < elemento; i++){
    if(array1[i] === array2[i]){
        const soma = array1[i] + array2[i];
        vetorSoma.push(soma)
    }
} 
console.log(vetorSoma)