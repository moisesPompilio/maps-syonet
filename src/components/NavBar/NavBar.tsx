import './NavBar.scss';
import logo from '../../assets/logo.png';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top flex flex-between">
            <div className="navbar-brand">
              <img src={logo} alt="logo" />
              <div className="navbar-title">
                <span className="text-red">SYO</span>
                <span className="text-light-blue">NET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-blue"> </div>
    </nav>
  );
}
