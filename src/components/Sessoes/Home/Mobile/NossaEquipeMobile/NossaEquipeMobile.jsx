import {NossaEquipeMobileStyle} from "./Style";
import {useContext, useState} from "react";
import {LangContext} from "../../../../../context/LangContext";

const NossaEquipeMobile = () => {
    // // isTrue: variável que controla se as informações da pessoa estão visíveis ou não
    // const [isTrue, setIsTrue] = useState(false);

    // isTrue1: variável que controla se as informações da pessoa 1 estão visíveis ou não
    const [isTrue1, setIsTrue1] = useState(false);

    // isTrue2: variável que controla se as informações da pessoa 2 estão visíveis ou não
    const [isTrue2, setIsTrue2] = useState(false);

    // isTrue3: variável que controla se as informações da pessoa 3 estão visíveis ou não
    const [isTrue3, setIsTrue3] = useState(false);

    // lang: variável que controla o idioma do site
    const { lang, setLang } = useContext(LangContext);

    return (
        <NossaEquipeMobileStyle>
            <div className="div" id={"equipe"}>
                <div className="titulo">
                    {lang === "PT" ? "Nossa Equipe" : "Our Team"}
                </div>
                <div className="conteudo">
                    <div className="dv-ne-co-card">
                        <div className={"pessoa"}>
                            <div className="foto">
                                <img src="imagens/equipe01.png" onClick={() => setIsTrue1(!isTrue1)}/>
                            </div>
                            <div className="nome">
                                Alexandre França <span>FRAGA</span>
                            </div>
                        </div>

                        {isTrue1 &&

                            <div className="informacoes-equipe">
                                <ul className="ul-informacoes">
                                    <li>
                                        {lang === "PT" ? "Engenheiro Eletrônico pela Escola Politécnica da Universidade de São Paulo, atua há mais de 35 anos no mercado financeiro." : "Electronic Engineer from the Polytechnic School of the University of São Paulo, has been working in the financial market for over 35 years."}
                                    </li>
                                    <li>
                                        {lang === "PT" ? "Desempenhou funções em diversas áreas em instituições como Lloyds Bank Plc, Banco Pecúnia, Banco Paulista e SOCOPA – Sociedade Corretora Paulista, onde foi Diretor de Marketing e Recursos (Tecnológicos, Humanos e Materiais)" : "He has held positions in various areas in institutions such as Lloyds Bank Plc, Banco Pecúnia, Banco Paulista and SOCOPA – Sociedade Corretora Paulista, where he was Director of Marketing and Resources (Technological, Human and Materials)"}
                                    </li>
                                    <li>
                                        {lang === "PT" ? "Sócio Fundador da PVR Capital, atualmente é responsável pelas Áreas Financeira e de Risco e Compliance." : "Founding Partner of PVR Capital, he is currently responsible for the Financial and Risk and Compliance Areas."}
                                    </li>
                                </ul>

                                <div className="redes">
                                    <div className="linkedin">
                                        <a href="https://www.linkedin.com/in/alexandre-fraga-bb0448/">
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
                        <div className={"pessoa"}>
                        <div className="foto">
                            <img src="imagens/equipe02.png" onClick={() => setIsTrue2(!isTrue2)}/>
                        </div>
                        <div className="nome">
                            <span>PEDRO</span> Thomazoni
                        </div>
                        </div>

                        {isTrue2 &&
                            <div className="informacoes-equipe">
                                <ul className="ul-informacoes">
                                    <li>
                                        {lang === "PT" ? "Economista pela FEA-USP, com especialização em mercado de capitais internacionais pela Oxford University." : "Economist by FEA-USP, with specialization in international capital markets by Oxford University."}
                                    </li>
                                    <li>
                                        {lang === "PT" ? "Experiência de mais de 30 anos no gerenciamento de carteiras de ações, mercados de capitais, fusões e aquisições e private equity." : "Experience of more than 30 years in managing equity portfolios, capital markets, mergers and acquisitions and private equity."}
                                    </li>
                                    <li>
                                        {lang === "PT" ? "Na PVR Capital, é responsável pela área de Asset Management." : "At PVR Capital, he is responsible for the Asset Management area."}
                                    </li>
                                    <li>
                                        {lang === "PT" ? "Foi sócio da Pulsar Invest, onde atuou como gestor de fundos de investimento em ações." : "He was a partner at Pulsar Invest, where he worked as a manager of equity investment funds."}
                                    </li>
                                </ul>

                                <div className="redes">
                                    <div className="linkedin">
                                        <a href={"https://www.linkedin.com/in/pedro-thomazoni-1684751/"}>
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
                        <div className={"pessoa"}>
                        <div className="foto">
                            <img src="imagens/rodrigo.png" onClick={() => setIsTrue3(!isTrue3)}/>
                        </div>
                        <div className="nome">
                            <p>
                                <span>RODRIGO</span> da Silva Perez
                            </p>
                        </div>
                        </div>

                        {isTrue3 &&

                            <div className="informacoes-equipe">
                                <ul className="ul-informacoes">
                                    <li>
                                        {lang === "PT" ? "Economista pelo INSPER | Instituto de Ensino e Pesquisa, com especialização em Investiment Banking pela Saint Paul." : "Economist by INSPER | Instituto de Ensino e Pesquisa, with specialization in Investment Banking by Saint Paul."}
                                    </li>
                                    <li>
                                        {lang === "PT" ? "Iniciou sua trajetória no time de Investment Banking do Santander Brasil, atuando em M&A e ECM." : "He began his career in the Investment Banking team at Santander Brasil, working in M&A and ECM."}
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
        </NossaEquipeMobileStyle>
    );
}

export default NossaEquipeMobile;