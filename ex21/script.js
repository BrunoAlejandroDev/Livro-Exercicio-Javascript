let palavra1 = prompt('Digite uma palavra')
let palavra2 = prompt('Digite outra palavra')

function verificarAnagrama(nome1, nome2){
    //converti a palavra para letras minúsculas
    palavra1 = palavra1.toLowerCase();
    palavra2 = palavra2.toLowerCase();
    
    //convertendo as variáveis de string em um array de caracteres
    let arrayPalavra1 = palavra1.split("");
    let arrayPalavra2 = palavra2.split("");

    //ordenar os array de caracteres em ordem alfabética
    arrayPalavra1.sort()
    arrayPalavra2.sort()

    if(arrayPalavra1.join("") === arrayPalavra2.join("")){
        console.log(`${nome2} é um anagrama de ${nome1}`)
    }
    else{
        console.log(`${nome2} não é um anagrama de ${nome1}`)
    }
}
verificarAnagrama(palavra1, palavra2)