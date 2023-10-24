let palavra = prompt('Digite uma palavra')

//função para verificar se a palavra começa com a letra 'A'
function verificarNome(nome){
    //charAt: serve para acessar um caractere específico dentro de uma string
    //é importante passar para maiúsculo ou minúsculo para que não tenha diferenciação
    if(palavra.charAt(0).toLowerCase() === 'a'){
        return true
    }
    else{
        return false
    }
}

if(verificarNome(palavra)){
    console.log('O nome começa com a letra A')
}
else{
    console.log('O nome não começa com a letra A')
}