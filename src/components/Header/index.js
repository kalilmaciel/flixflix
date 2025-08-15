import "./header.css";
import logo from "../../img/logo_flix_flix.jpg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Flix Flix" />
            </Link>
            <nav>
                <ul>                    
                    <li>
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

