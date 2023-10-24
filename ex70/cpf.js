function verificarCPF(cpf){
    // Retirar todos os espaços em branco e símbolos
    cpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF digitado possui 11 números
    if(cpf.length !== 11){
        return false
    }

    // Verificar o primeiro digito verificador
    let soma = 0;
    for(let i = 0; i < 9; i++){
        soma = soma + parseInt(cpf.charAt(i)) * (10 - i)
    }
    let digito1 = 11 - (soma % 11)

    if(digito1 > 9){
        digito1 = 0
    }

    // Verificar se o valor de digito1 corresponde ao valor digitado pelo usuário
    if(parseInt(cpf.charAt(9)) !== digito1){
        return false
    }

    // Verificar o segundo digito verificador
    soma = 0;
    for(let i = 0; i < 10; i++){
        soma = soma + parseInt(cpf.charAt(i)) * (11 - i)
    }
    let digito2 = 11 - (soma % 11)

    if(digito2 > 9){
        digito2 = 0
    }

    if(parseInt(cpf.charAt(10)) !== digito2){
        return false
    }

    return true;
}

const cpf = prompt('Digite seu CPF abaixo (Apenas números)')

// Validar CPF  
if(verificarCPF(cpf)){
    console.log('CPF válido')
}
else{
    console.log('CPF inválido')
}