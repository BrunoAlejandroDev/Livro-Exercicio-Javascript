let palavra = prompt('Digite uma palavra')

//variável contadora
let contador = 0;

//adaptando para deixar toda a palavra em minusculo
palavra = palavra.toLowerCase()

//verificado e loop for
if(palavra.length > 0){
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] === 'a'){
            contador++;
        }
        else if(palavra[i] === 'e'){
            contador++;
        }
        else if(palavra[i] === 'i'){
            contador++;
        }
        else if(palavra[i] === 'o'){
            contador++;
        }
        else if(palavra[i] === 'u'){
            contador++;
        }
    }
    console.log(`A quantidade de vogais presente no texto é: ${contador}`)
}
else{
    alert('Você não digitou nada')
}

// outra forma de fazer
let vogais = ['a', 'e', 'i', 'o', 'u']; //variável que contém um array de vogais

let vogaisEncontradas = palavra.split('').filter(letra => vogais.includes(letra.toLowerCase())); 
// split: transforma a string palavra em uma array de caracteres (um array onde cada elemento é uma letra da palavra)
// O nome 'letra' é apenas um nome de parâmetro escolhido para representar cada elemento da array palavra

let quantVogais = vogaisEncontradas.length;
console.log(quantVogais)