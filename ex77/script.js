const elementos = parseInt(prompt('Digite quantos elementos terá no vetor'))

// criando o vetor
let array = [];

// pedindo ao usuários os valores e inserindo no vetor
for(let i = 0; i < elementos; i++){
    const valores = parseInt(prompt(`Digite o valor ${i}`))
    array.push(valores)
}

// encontrando o maior valor
let maior = array[0]
for(let i = 0; i < array.length; i++){
    if(array[i] > maior){
        maior = array[i]
    }
}

// definindo o valor do segundo maior valor como o menor possível
let segundoMaiorValor = -Infinity

// percorrer novamente o array e encontrar o segundo maior valor
for(let i = 0; i < array.length; i++){
    if(array[i] !== maior && array[i] > segundoMaiorValor){
        segundoMaiorValor = array[i]
    }
}
console.log(segundoMaiorValor)

/* OUTRA FORMA DE FAZER
    array.sort((a,b) => a-b); -> colocar em ordem crescente
    
    if(array.length >= 2){
        const segundoMaior = array[array.length-2]
        console.log(segundoMaior)
    }
    else{
        console.log('O vetor precisa de pelo menos dois valores')
    }
*/