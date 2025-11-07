// Lista de emails autorizados a acessar o sistema
// Para adicionar um novo email, basta adicioná-lo ao array abaixo

export const allowedEmails = process.env.AUTHORIZED_EMAILS?.split(",") || [
  // Adicione mais emails aqui conforme necessário
  // "exemplo@email.com",
];
