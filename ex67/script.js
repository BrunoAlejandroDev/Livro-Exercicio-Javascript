let res = document.querySelector('.resposta')
const numero = Number(prompt('Digite um número'))
console.log(`Os divisores de ${numero}:`)

for(let i = 1; i <= numero; i++){
    if(numero % i === 0){
        console.log(i)
    }
}