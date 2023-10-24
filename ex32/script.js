let respostaSituacao = document.querySelector('.situacao-aluno')
let prova1 = Number(prompt('Digite a nota da primeira prova'))
let prova2 = Number(prompt('Digite a nota da segunda prova'))

function mediaAluno(n1, n2){
    let media = (n1 + n2)/2

    if(isNaN(n1) || isNaN(n2)){
        alert('Por favor, digite valores válidos')
    }
    else if(media >= 7){
        respostaSituacao.innerHTML = `APROVADO. Sua média final foi ${media}`
    }
    else{
        respostaSituacao.innerHTML = `REPROVADO. Sua média final foi ${media}`
    }
}
mediaAluno(prova1, prova2)