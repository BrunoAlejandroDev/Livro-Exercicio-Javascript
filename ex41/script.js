let diaSemana = prompt('Digite o dia da semana').toLowerCase()

//verificando se é final de semana
if(diaSemana.includes('sábado') || diaSemana.includes('domingo')){
    alert(`O dia de hoje é: ${diaSemana}, é fim de semana, amém!`)
}
else if(diaSemana.includes('segunda') || diaSemana.includes('terça') || diaSemana.includes('quarta')){
    alert(`O dia de hoje é ${diaSemana}, é um dia útil. Triste`)
}
else if(diaSemana.includes('quinta')){
    alert(`O dia de hoje é ${diaSemana}, é um dia útil. Mas pelo menos quinta é igual calcinha`)
}
else if(diaSemana.includes('sexta')){
    alert(`SEXTOU PAPAI`)
}
else{
    alert('Valor inválido')
}