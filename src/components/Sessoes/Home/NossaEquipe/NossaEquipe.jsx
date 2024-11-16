import {NossaEquipeStyle} from "./Style";
import {useState} from "react";

const NossaEquipe = () => {
    const [isTrue, setIsTrue] = useState(false);

    return (
        <NossaEquipeStyle>
            <div className="dv-nossa-equipe">
                <div className="dv-ne-titulo">
                    Nossa Equipe
                </div>
                <div className="dv-ne-conteudo">
                    <div className="dv-ne-co-card">
                        <div className="dv-ne-co-cd-foto">
                            <img src="imagens/equipe01.png"/>
                        </div>
                        <div className="dv-ne-co-cd-nom">
                            Alexandre França <span>Fraga</span>
                        </div>
                        <div className="dv-ne-co-cd-btn">
                            <button className={`btn-ne-co-cd ${isTrue ? "ativo" : ""}`}
                                    onClick={() => setIsTrue(!isTrue)}>
                                <img src="imagens/setaDropdown.png"/>
                            </button>
                        </div>
                        {isTrue &&

                            <div className="informacoes-equipe">
                                <ul className="ul-informacoes">
                                    <li>
                                        Engenheiro Eletrônico pela Escola Politécnica da Universidade de São Paulo, atua
                                        há mais
                                        de
                                        35
                                        anos no mercado financeiro.
                                    </li>
                                    <li>
                                        Desempenhou funções em diversas áreas em instituições como Lloyds Bank Plc,
                                        Banco
                                        Pecúnia,
                                        Banco
                                        Paulista e SOCOPA – Sociedade Corretora Paulista, onde foi Diretor de Marketing
                                        e
                                        Recursos
                                        (Tecnológicos, Humanos e Materiais)
                                    </li>
                                    <li>
                                        Sócio Fundador da PVR Capital, atualmente é responsável pelas Áreas Financeira e
                                        de
                                        Risco e
                                        Compliance.
                                    </li>
                                </ul>

                                <div className="redes">
                                    <div className="linkedin">
                                        <a>
                                            <img src="imagens/linkedin.png"/>
                                        </a>
                                    </div>
                                    <div className="email">
                                        <a>
                                            <img src="imagens/e-mail.png"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="dv-ne-co-card">
                        <div className="dv-ne-co-cd-foto">
                            <img src="imagens/equipe02.png"/>
                        </div>
                        <div className="dv-ne-co-cd-nom">
                            <span>PEDRO</span> Thomazoni
                        </div>
                        <div className="dv-ne-co-cd-btn">
                            <button className={`btn-ne-co-cd ${isTrue ? "ativo" : ""}`} onClick={() => setIsTrue(!isTrue)}>
                                <img src="imagens/setaDropdown.png"/>
                            </button>
                        </div>

                        {isTrue &&
                            <div className="informacoes-equipe">
                                <ul className="ul-informacoes">
                                    <li>
                                        Economista pela FEA-USP, com especialização em mercado de capitais
                                        internacionais pela
                                        Oxford
                                        University.
                                    </li>
                                    <li>
                                        Experiência de mais de 30 anos no gerenciamento de carteiras de ações, mercados
                                        de
                                        capitais,
                                        fusões e aquisições e private equity.
                                    </li>
                                    <li>
                                        Trabalhou em instituições financeiras importantes como Citibank NA, Lloyds TSB
                                        plc,
                                        Banco
                                        Votorantim, Latin Finance e EP Capital.
                                    </li>
                                    <li>
                                        Na PVR Capital Assessoria, é responsável pela área de M&A.
                                    </li>
                                </ul>

                                <div className="redes">
                                    <div className="linkedin">
                                        <a>
                                            <img src="imagens/linkedin.png"/>
                                        </a>
                                    </div>
                                    <div className="email">
                                        <a>
                                            <img src="imagens/e-mail.png"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="dv-ne-co-card">
                        <div className="dv-ne-co-cd-foto">
                            <img src="imagens/usuario.jpg"/>
                        </div>
                        <div className="dv-ne-co-cd-nom">
                            <span>RODRIGO</span> da Silva Perez
                        </div>
                        <div className="dv-ne-co-cd-btn">
                            <button className={`btn-ne-co-cd ${isTrue ? "ativo" : ""}`}
                                    onClick={() => setIsTrue(!isTrue)}>
                                <img src="imagens/setaDropdown.png"/>
                            </button>
                        </div>

                        {isTrue &&

                            <div className="informacoes-equipe">
                                <ul className="ul-informacoes">
                                    <li>
                                        Economista pelo INSPER | Instituto de Ensino e Pesquisa, com especialização em
                                        Investiment
                                        Banking pela Saint Paul.
                                    </li>
                                    <li>
                                        Iniciou sua trajetória no time de Investment Banking do Santander Brasil,
                                        atuando em M&A
                                        e
                                        ECM.
                                        Trabalhou em boutiques de assessoria financeira de renome, tais como Pulsar
                                        Invest, SRB
                                        e EP
                                        Capital, tendo se especializado em M&A e planejamento estratégico.
                                    </li>
                                </ul>

                                <div className="redes">
                                    <div className="linkedin">
                                        <a>
                                            <img src="imagens/linkedin.png"/>
                                        </a>
                                    </div>
                                    <div className="email">
                                        <a>
                                            <img src="imagens/e-mail.png"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </NossaEquipeStyle>
    );
}

export default NossaEquipe;