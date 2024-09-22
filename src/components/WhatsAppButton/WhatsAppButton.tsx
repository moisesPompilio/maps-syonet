import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.scss';
import { gerarLinkWhatsApp } from '../../util/whatsAppMesage';

interface WhatsAppButtonProps {
  text?: string; // O texto é opcional
}

export function WhatsAppButton({ text }: WhatsAppButtonProps) {
  const defaultText = 'Quero conversar com meu advogado!'; // Texto padrão

  const handleClick = () => {
    window.open(gerarLinkWhatsApp(), '_blank'); // Abre o link em uma nova aba
  };

  return (
    <button
      type="button"
      className="whatsapp-button-text"
      onClick={handleClick}
    >
      <FaWhatsapp size={20} className="whatsapp-icon" />
      <span>{text || defaultText}</span>
    </button>
  );
}
