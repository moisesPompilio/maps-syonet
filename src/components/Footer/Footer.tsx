import './Footer.scss';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import logo from '../../assets/logo_com_nome_preto.png';
import { redesSociais } from '../../util/globalVariables';
import { gerarLinkWhatsApp, telefone } from '../../util/whatsAppMesage';

export function Footer() {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'facebook':
        return <FaFacebookF />;
      case 'instagram':
        return <FaInstagram />;
      case 'whatsapp':
        return <FaWhatsapp />;
      default:
        return null;
    }
  };
  return (
    <footer className="footer py-5 bg-dark">
      <div className="container">
        <div className="footer-content text-white grid">
          <div className="footer-item text-center">
            <h6 className="fs-26 fw-6">Fale com a gente</h6>
            <div className="atendimento">
              <img id="logo" src={logo} alt="logo com nome" />
              <a
                href={gerarLinkWhatsApp()}
                rel="noreferrer noopener"
                target="_blank"
                className="contato"
              >
                <FaWhatsapp /> {telefone}
              </a>
              <div className="contato-text">
                Atendemos de forma on-line em todo Brasil
              </div>
              <div className="redes-sociais">
                {redesSociais.map(rede => (
                  <div key={rede.name}>
                    <a
                      href={rede.Link}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="fs-19 d-flex align-items-center justify-content-center"
                    >
                      {getIcon(rede.name)}{' '}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="direitos flex-column">
              <div className="fs-16">
                Pablo Alexandre | ©️ TODOS OS DIREITOS RESERVADOS
              </div>
              <div className="fs-14 text-light-blue">
                Este site não é um produto Meta Platforms, Inc., Google LLC,
                tampouco oferece serviços públicos oficiais. O Dr. Pablo
                Alexandre oferece serviços jurídicos privativos de advogado, de
                acordo com a legislação vigente e o Código de Ética e Disciplina
                da Ordem dos Advogados do Brasil.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
