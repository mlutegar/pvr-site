import {Link} from "react-router-dom";
import {HeaderMobileStyle} from "./Style";
import {useContext, useState} from "react";
import {LangContext} from "../../../context/LangContext";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const HeaderMobile = () => {
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
        <HeaderMobileStyle>
            <div className={"mobile"}>
                <div className="left">
                    <Link to="/">
                        <img
                            className="Logo"
                            src="imagens/logo.svg"
                        />
                    </Link>
                </div>
                <div className="right">
                    <button id="buggerMenu" className="buggerMenu" onClick={(toggleMenu)}>
                        <AiOutlineMenu/>
                    </button>
                </div>
            </div>

            <div className={`menuMobile ${menuAtivo ? "desativo" : "ativo"}`}>

                <div className={"fundoPreto"}>

                </div>

                <div className={"fundoBranco"}>
                    <button id="buggerMenu" className="buggerMenu botaoFechar" onClick={(toggleMenu)}>
                        <AiOutlineClose/>
                    </button>

                    <div className={"menuItens"}>
                        <Link to="/" className="navbarItem" id="Home" onClick={toggleMenu}>
                            {lang === "PT" ? "Início" : "Home"}
                        </Link>
                        <Link to="/servicos" className="navbarItem" id="navServicos" onClick={toggleMenu}>
                            {lang === "PT" ? "Serviços" : "Services"}
                        </Link>
                        <Link to="/transacoes" className="navbarItem" id="navEquipe" onClick={toggleMenu}>
                            {lang === "PT" ? "Transações" : "Transactions"}
                        </Link>
                        <Link to="/#contato" className="navbarItem" id="navContato" onClick={toggleMenu}>
                            {lang === "PT" ? "Contato" : "Contact"}
                        </Link>
                    </div>
                    <div className={"menuLang"}>
                        <button id="btnPT" className={`langButton pt ${lang === "PT" ? "lnAtivo" : "lnDesativo"}`}
                                onClick={toggleLanguage}>PT
                        </button>
                        <button id="btnEN" className={`langButton en ${lang === "EN" ? "lnAtivo" : "lnDesativo"}`}
                                onClick={toggleLanguage}
                        >EN
                        </button>
                    </div>
                </div>
            </div>
        </HeaderMobileStyle>)
}

export default HeaderMobile;