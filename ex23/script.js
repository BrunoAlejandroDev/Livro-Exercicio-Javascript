let frase = prompt('Digite uma frase')

//variável contadora
let contarEspacos = 0

//loop for para verificar todos os espaços em branco na frase
if(frase.length > 0){
    for(let i = 0; i < frase.length; i++){
        if(frase[i] === " "){
            contarEspacos++;
        }
    }
    console.log(`A frase possui ${contarEspacos} espaços em branco`)
}
else{
    console.log(`Você não digitou nada`)
}