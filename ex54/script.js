let base = Number(prompt('Digite um número'))
let expoente = Number(prompt('Digite o valor do expoente'))
let resultado = 1

for(let i = 0; i < expoente; i++){
    resultado = resultado * base
}
console.log(`O valor de ${base} elevado a ${expoente} é igual a: ${resultado}`)

/* OUTRA FORMA DE FAZER */
let res = Math.pow(base, expoente)
console.log(`${base} elevado a ${expoente} é igual a: ${res}`)