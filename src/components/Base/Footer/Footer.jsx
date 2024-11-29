import { FooterStyle } from "./Style";
import {Link} from "react-router-dom";

const Footer = () => (
    <FooterStyle>
        <div className="conteudo">
            <div className="nav">
                <Link to="/" className="NavbarItem" id="navQuemSomos" onClick={() => window.scrollTo(0, 0)} >Home</Link>
                <Link to="/servicos" className="NavbarItem" id="navServicos" onClick={() => window.scrollTo(0, 0)} >Serviços</Link>
                <Link to="/transacoes" className="NavbarItem" id="navEquipe" onClick={() => window.scrollTo(0, 0)} >Transações</Link>
                <Link to="/#equipe" className="NavbarItem" id="navContato">Quem somos</Link>
            </div>
            <div className="logo">
                <img className="Logo Logo-posicao" src="imagens/pvr.png"/>
            </div>
        </div>
        <div className="dv-fr-copyright">
            <div>
                © Copyright 2024 PVR Capital. All rights reserved.
            </div>
            <div>
                Politicas de Privacidade | Termos de Uso
            </div>
        </div>
    </FooterStyle>
)

export default Footer;