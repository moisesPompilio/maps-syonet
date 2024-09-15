import './BtnWhatsApp.scss';

import { FaWhatsapp } from 'react-icons/fa';

export function BtnWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511999999999" // Seu número do WhatsApp com código do país
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}
