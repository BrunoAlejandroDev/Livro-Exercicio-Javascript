const numero1 = Number(prompt('Digite o primeiro número'))
const numero2 = Number(prompt('Digite o segundo número'))

// Encontrar o menor valor 
let menorNumero;
if(numero1 < numero2){
    menorNumero = numero1
}
else{
    menorNumero = numero2
}

// Inicializar a variável
let mdc;

// Loop para encontrar o mdc
for(let i = 1; i <= menorNumero; i++){
    if(numero1 % i === 0 && numero2 % i === 0){
        mdc = i
    }
}

console.log(mdc)