import logoImage from '../../assets/images/logo.jpg';
import '../../css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="nav">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
          <ul className="nav-links">
            <li><Link to="/register">Registar</Link></li>
            <li><Link to="/login">Entrar</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
