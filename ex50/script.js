let num = Number(prompt('Digite um número'))

/* VALIDAR APENAS NÚMEROS INTEIROS POSITIVOS */
if(isNaN(num) || num <= 0){
    alert('Digite um valor válido. Exemplo: 2')
}
else{
    console.log(`Tabuada do número ${num}`)
    for(let i = 1; i<=10; i++){
        const resultado = num * i
        console.log(`${num} x ${i} = ${resultado}`)
    }
}