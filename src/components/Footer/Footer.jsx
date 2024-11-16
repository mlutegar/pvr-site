import { FooterStyle } from "./Style";

const Footer = () => (
    <FooterStyle>
        <div className="dv-fr-conteudo">
            <div className="dv-fr-co-nav">
                <a href="/assessor" className="Nav-item QuemSomos" id="navQuemSomosFooter">Quem somos</a>
                <a href="/servicos" className="Nav-item Servicos-posicao" id="navServicosFooter">Serviços</a>
                <a href="/transacoes" className="Nav-item Equipe-posicao" id="navEquipeFooter">Equipe</a>
                <a href="/contato" className="Nav-item Contato-posicao" id="navContatoFooter">Contato</a>
            </div>
            <div className="dv-fr-co-logo">
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