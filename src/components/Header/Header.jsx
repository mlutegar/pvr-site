import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
    <Top>
        <nav className="nav">
            <div>
                <img
                    className="Logo"
                    src="imagens/logo1.png"
                />
            </div>
            <div className="navbaritens">
                <Link to="/" className="NavbarItem" id="navQuemSomos">Home</Link>
                <Link to="/servicos" className="NavbarItem" id="navServicos">Serviços</Link>
                <Link to="/transacoes" className="NavbarItem" id="navEquipe">Transações</Link>
                <Link to="/" className="NavbarItem" id="navContato">Quem somos</Link>
            </div>
            <div>
                <div className="LangButtonsContainer">
                    <button id="btnPT" className="LangButton active">PT</button>
                    <button id="btnEN" className="LangButton">EN</button>
                </div>
            </div>
        </nav>
    </Top>
)

export default Header;