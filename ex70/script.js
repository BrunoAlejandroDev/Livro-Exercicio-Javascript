// Função para verificar se um CPF é válido
function validarCPF(cpf){
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digito1 = (soma % 11);
  
    // Verifica o primeiro dígito verificador
    if (parseInt(cpf.charAt(9)) !== digito1) {
      return false;
    }
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digito2 = (soma % 11);
  
    // Verifica o segundo dígito verificador
    if (parseInt(cpf.charAt(10)) !== digito2) {
      return false;
    }

    return true;
}
  
  // Solicita o CPF do usuário
  const cpf = prompt('Digite o seu CPF (apenas números):');
  
  // Verifica se o CPF é válido
  if (validarCPF(cpf)) {
    console.log('CPF válido.');
  } else {
    console.log('CPF inválido.');
  }
  