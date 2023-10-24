let estadoProva1 = document.querySelector('.prova1')
let estadoProva2 = document.querySelector('.prova2')
let nota1 = Number(prompt('Digite a nota da sua primeira prova'))
let nota2 = Number(prompt('Digite a nota da sua segunda prova'))

function situacaoProva1(n1){
    if(n1>=7){
        estadoProva1.innerHTML = `APROVADO. Sua nota foi ${n1}`
    }
    else{
        estadoProva1.innerHTML = `REPROVADO. Sua nota foi ${n1}`
    }
}
situacaoProva1(nota1)

function situacaoProva2(n2){
    if(n2>=7){
        estadoProva2.innerHTML = `APROVADO. Sua nota foi ${n2}`
    }
    else{
        estadoProva2.innerHTML = `REPROVADO. Sua nota foi ${n2}`
    }
}
situacaoProva2(nota2)