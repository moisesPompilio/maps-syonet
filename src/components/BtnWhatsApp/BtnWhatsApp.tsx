import './BtnWhatsApp.scss';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { redesSociais } from '../../util/globalVariables';

export function BtnWhatsApp() {
  const redeWhatsApp = redesSociais.find(redes => redes.name === 'WhatsApp');
  const [mostrarBalao, setMostrarBalao] = useState(false);
  const [mensagemIndex, setMensagemIndex] = useState(0);
  const mensagens = [
    'Converse conosco',
    'Alguma dúvida? Fale conosco',
    'Converse com o nosso especialista',
  ];

  useEffect(() => {
    // Exibir o balão após 40 segundos
    const timer = setTimeout(() => {
      setMostrarBalao(true);
    }, 4000);

    // Alternar mensagens a cada 5 segundos
    const intervalo = setInterval(() => {
      setMensagemIndex(prevIndex => (prevIndex + 1) % mensagens.length);
    }, 8000); // Troca de mensagem a cada 5 segundos

    // Limpar timers quando o componente for desmontado
    return () => {
      clearTimeout(timer);
      clearInterval(intervalo);
    };
  }, []);

  if (!redeWhatsApp?.Link) {
    return null;
  }

  return (
    <div className="whatsapp-container">
      <a
        href={redeWhatsApp?.Link}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {mostrarBalao && (
          <div className="whatsapp-balao">{mensagens[mensagemIndex]}</div>
        )}
        <FaWhatsapp />
      </a>
    </div>
  );
}
