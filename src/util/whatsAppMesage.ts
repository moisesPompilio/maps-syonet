export const whatsAppLink = 'https://wa.me//5591993553542';

export const gerarLinkWhatsApp = (mensagem?: string): string => {
  if (mensagem === '' || mensagem === undefined || mensagem === null) {
    const mensagemCodificada = encodeURIComponent(
      'Olá, estou vindo da página do escritório e gostaria de falar com um advogado especialista',
    );
    return `${whatsAppLink}?text=${mensagemCodificada}`;
  }
  const mensagemCodificada = encodeURIComponent(mensagem); // Codifica a mensagem para a URL
  return `${whatsAppLink}?text=${mensagemCodificada}`;
};
