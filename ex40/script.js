let note1 = Number(prompt('Digite a primeira nota'))
let note2 = Number(prompt('Digite a segunda nota'))
let note3 = Number(prompt('Digite a terceira nota'))

// Função para verificar a situação do aluno
function situationStudent(){
    let media = (note1 + note2 + note3)/3;
    if(isNaN(note1) || isNaN(note2) || isNaN(note3)){
        alert('Erro. Valor inválido')
    }
    else if(media >= 7 && media < 9.5){
        alert(`Situação: APROVADO. Sua média foi ${media.toFixed(2)}.`)
    }
    else if(media >= 9.5){
        alert(`Situação: APROVADO. Sua média foi ${media.toFixed(2)}. Você foi aprovado com maestria`)
    }
    else if(media >= 4 || media < 7){
        alert(`Situação: RECUPERAÇÃO. Sua média foi ${media.toFixed(2)}.`)
    }
    else{
        alert(`Situação: REPROVADO. Sua média foi ${media.toFixed(2)}.`)
    }
}
situationStudent()