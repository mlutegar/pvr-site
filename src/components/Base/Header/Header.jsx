import {Link} from "react-router-dom";
import {HeaderStyle} from "./Style";
import {useContext, useState} from "react";
import {LangContext} from "../../../context/LangContext";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Header = () => {
    const {lang, setLang} = useContext(LangContext);
    const [menuAtivo, setMenuAtivo] = useState(true);

    // toggleMenu: função que ativa o menu, se o menu estiver desativado e vice-versa
    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    }

    const toggleLanguage = () => {
        setLang((prevLang) => (prevLang === "PT" ? "EN" : "PT"));
    };

    return (
        <HeaderStyle>
            <div className={"desktop"}>
                <div className="left">
                    <Link to="/">
                        <img
                            className="Logo"
                            src="imagens/logo.svg"
                        />
                    </Link>
                </div>
                <div className="center">
                    <Link to="/" className="navbarItem" id="Home" onClick={() => window.scrollTo(0, 0)} >
                        {lang === "PT" ? "Início" : "Home"}
                    </Link>
                    <Link to="/servicos" className="navbarItem" id="navServicos" onClick={() => window.scrollTo(0, 0)} >
                        {lang === "PT" ? "Serviços" : "Services"}
                    </Link>
                    <Link to="/transacoes" className="navbarItem" id="navEquipe" onClick={() => window.scrollTo(0, 0)} >
                        {lang === "PT" ? "Transações" : "Transactions"}
                    </Link>
                    <Link to="/#contato" className="navbarItem" id="navContato" onClick={() => window.scrollTo(0, 0)} >
                        {lang === "PT" ? "Contato" : "Contact"}
                    </Link>
                </div>
                <div className="right">
                    <button id="btnPT" className={`langButton pt ${lang === "PT" ? "ativo" : "desativo"}`}
                            onClick={toggleLanguage}>PT
                    </button>
                    <button id="btnEN" className={`langButton en ${lang === "EN" ? "ativo" : "desativo"}`}
                            onClick={toggleLanguage}
                    >EN
                    </button>
                </div>
            </div>
        </HeaderStyle>)
}

export default Header;