let palavra = prompt('Digite uma palavra e veja se ele é um palíndromo')

function verificarPalindromo(nome){
    //convertendo a palavra para letras minúsculas
    palavra = palavra.toLowerCase()
    console.log(`Palavra original: ${palavra}`)

    //invertendo a palavra
    let palavraInvertida = palavra.split('').reverse().join('')
    console.log(`Palavra invertida: ${palavraInvertida}`)

    if(palavra === palavraInvertida){
        console.log(`${palavra} é um palíndromo`)
    }
    else{
        console.log(`${palavra} não é um palíndromo`)
    }
}
verificarPalindromo(palavra)

//split: serve para dividir os caracteres de uma string e retorná-la como um array
//reverse: muda a ordem de um array
//join: é usado para criar uma string a partir dos elementos de um array