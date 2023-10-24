const palavra = prompt('Digite uma palavra e veja se ela é um palavra')

// removendo espaços em branco
const texto = palavra.replace(/\s/g, '').toLowerCase()

//verificando se a palavra é um palindromo
let ehPalindromo = true
for(let i = 0; i < texto.length / 2; i++){
    if(texto[i] !== texto[texto.length-1-i]){
        ehPalindromo = false;
        break
    }
}

if(ehPalindromo){
    console.log('É palíndromo')
}
else{
    console.log('Não é palíndromo')
}

//OUTRA FORMA DE FAZER
function verificarPalindromo(texto){
    texto = texto.replace(/\s/g, '').toLowerCase()

    //verificando se não é palíndromo e retornando false
    for(let i = 0; i < texto.length/2; i++){
        if(texto[i] !== texto[texto.length - 1 - i]){
            return false
        }
    }
    return true
}

if(verificarPalindromo(palavra)){
    console.log('É palíndromo')
}
else{
    console.log('Não é palíndromo')
}
