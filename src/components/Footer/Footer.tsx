import './Footer.scss';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { redesSociais } from '../../util/globalVariables';

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
            <h6 className="fs-19 fw-6">Redes sociais</h6>
            <ul>
              {redesSociais.map(rede => (
                <li key={rede.name}>
                  <a
                    href={rede.Link}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="fs-19 d-flex align-items-center justify-content-center"
                  >
                    {getIcon(rede.name)}{' '}
                    <span className="fs-17" style={{ marginLeft: '8px' }}>
                      {rede.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-19 fw-6">Informações</h6>
            <ul>
              <li>
                <a href="#about" rel="noreferrer noopener" className="fs-17">
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#areas" rel="noreferrer noopener" className="fs-17">
                  Espacialidades
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
