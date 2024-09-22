import './NavBar.scss';
import logo from '../../assets/logo_branca.png';
import { WhatsAppButton } from '../WhatsAppButton/WhatsAppButton';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top">
            <div className="navbar-brand">
              <img src={logo} alt="logo" />
              <div className="navbar-title">
                <span className="principal text-primary"> PABLO ALEXANDRE</span>
                <span className="adv text-white"> ADVOGADO </span>
              </div>
            </div>
            <div className="navbar-presentation text-white">
              <h1 className="text-uppercase">
                Se você procura um advogado especialista em direito de família,
                condominial e tributarista, você está no lugar certo, nós
                podemos te ajudar.
              </h1>
              <div className="text fw-6">
                Somos um escritório de advocacia especializado em{' '}
                <strong className="fw-9">
                  Pedido de Pensão Alimentícia, Divórcio, Guarda de Filhos
                </strong>{' '}
                e outras questões nas áreas do Direito.
              </div>
              <div className="text fw-6">
                Oferecemos uma atuação estratégica, focada na defesa dos
                direitos de nossos clientes e na busca de soluções eficazes para
                conflitos.
              </div>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
      <div className="border-primary" />
    </nav>
  );
}
