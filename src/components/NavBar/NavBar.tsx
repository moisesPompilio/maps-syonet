import './NavBar.scss';
import logo from '../../assets/logo_escura.png';
import logo2 from '../../assets/logo_branca.png';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top flex flex-between">
            <div className="navbar-brand">
              <img src={logo} alt="logo" />
              <div className="navbar-title">
                <span className="text-secondary">ADVOGADO </span>
                <span className="text-primary"> PABLO ALEXANDRO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-blue"> </div>
    </nav>
  );
}
