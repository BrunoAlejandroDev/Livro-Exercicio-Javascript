const frase = prompt('Digite uma frase')
const vogais = ['a','e','i','o','u']
let quantidadeVogais = 0;

for(let i = 0; i < frase.length; i++){
    const caracteres = frase[i].toLowerCase()

    if(vogais.includes(caracteres)){
        quantidadeVogais++
    }
}
console.log(`A quantidade de vogais na frase é: ${quantidadeVogais}`)

/*OUTRA FORMA DE FAZER
const frase = prompt("...")
const vogais = frase.match(/[aeiou]/gi);

if(vogais !== null){
    const quantidadeVogais = vogais.length
    console.log(quantidadeVogais)
}
else{
    console.log('A frase não possui vogais')
}
*/
