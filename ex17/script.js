let palavra = prompt('Digite uma palavra')

//percorrendo a palavra usando um laço for
for(let contador of palavra){
    console.log(contador)
}
console.log()

//adicionando o spread para transformar essa variável em um array
let palavra2 = [...prompt('Digite outra palavra')]

//percorrendo o array usando map
palavra2.map((e)=>{
    console.log(e)
})