import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer py-5 bg-dark">
      <div className="container">
        <div className="footer-content text-white grid">
          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">Links</h6>
            <ul>
              <li>
                <a
                  href="https://github.com/moisesPompilio/maps-syonet"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Repositorie deste site
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/maps/documentation?hl=pt-br"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Documentação da API
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moisesPompilio"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Developer Repository
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">conheça a Syonet</h6>
            <ul>
              <li>
                <a
                  href="https://syonet.com.br/sobre-a-syonet/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="fs-15"
                >
                  Informações da empresa
                </a>
              </li>
              <li>
                <a
                  href="https://syonet.com.br/cases/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="fs-15"
                >
                  Cases
                </a>
              </li>
              <li>
                <a
                  href="https://syonet.com.br/agende-uma-demonstracao/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">Contato do criador dessa pargina</h6>
            <ul>
              <li>
                <span>
                  <i className="fas fa-phone" />
                </span>
                <span className="fs-15">(91)987420521</span>
              </li>
              <li>
                <span>
                  <i className="fas fa-envelope" />
                </span>
                <span className="fs-15">moisesalexandrep.c@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
