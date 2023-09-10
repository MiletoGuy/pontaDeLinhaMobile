export default function ValidaCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');
  
    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = (resto === 10 || resto === 11) ? 0 : resto;
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = (resto === 10 || resto === 11) ? 0 : resto;
  
    // Verifica se os dígitos verificadores estão corretos
    if (parseInt(cpf.charAt(9)) !== digito1 || parseInt(cpf.charAt(10)) !== digito2) {
      return false;
    }
  
    return true;
  }
  