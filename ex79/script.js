const elementos = parseInt(prompt('Digite quantos elementos terá no vetor'))

// criando o vetor
let array1 = [];
let array2 = [];

// pedindo ao usuários os valores e inserindo no array1
for(let i = 0; i < elementos; i++){
    const valores = parseInt(prompt(`Digite o valor ${i} para o array 1`))
    array1.push(valores)
}

// pedindo ao usuários os valores e inserindo no array2
for(let i = 0; i < elementos; i++){
    const valores = parseInt(prompt(`Digite o valor ${i} para o array 2`))
    array2.push(valores)
}

// criando outro array para receber os novos valores 
let vetorResultado = [];

// percorrendo os dois array com base nos índices e multiplicando os índices correspondentes
for(let i = 0; i < elementos; i++){
    if(array1[i] === array2[i]){
        const resultado = array1[i] * array2[i]
        vetorResultado.push(resultado) // insere os novos valores no novo array resultante 
    }
}
console.log(vetorResultado)