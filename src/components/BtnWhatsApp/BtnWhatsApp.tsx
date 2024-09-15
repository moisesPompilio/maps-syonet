import './BtnWhatsApp.scss';

import { FaWhatsapp } from 'react-icons/fa';

import { redesSociais } from '../../util/globalVariables';

export function BtnWhatsApp() {
  const redeWhatsApp = redesSociais.find(redes => redes.name === 'WhatsApp');

  if (!redeWhatsApp?.Link) {
    return null;
  }

  return (
    <a
      href={redeWhatsApp?.Link}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}
