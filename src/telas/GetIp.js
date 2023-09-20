export default function GetIp(callback) {
  const ipDetectionURL = 'https://api.ipify.org?format=json';

  return fetch(ipDetectionURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Não foi possível obter o endereço IP público.');
      }
      return response.json();
    })
    .then(data => {
      return data.ip; // Retorna o endereço IP em caso de sucesso
    })
    .catch(error => {
      console.error('Erro ao obter o endereço IP público:', error);
      return null; // Retorna null em caso de erro
    });
  }