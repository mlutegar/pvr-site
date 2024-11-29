import {NossosServicosStyle} from "./Style";
import Botao from "../../../../Itens/Botao/Botao";
import {LangContext} from "../../../../../context/LangContext";
import {useContext} from "react";

const NossosServicos = () => {
    const { lang, setLang } = useContext(LangContext);

    return (
        <NossosServicosStyle>
            <div className="dv-nossos-servicos-titulo">
                {lang === "PT" ? "Nossos Serviços" : "Our Services"}
            </div>
            <div className="dv-nossos-servicos-conteudo">
                <div className="cd-nossos-servicos">
                    <div className="cd-logo-nossos-servicos">
                        <img className="Icone" src="imagens/icone1.png" alt="Ícone 1"/>
                    </div>
                    <div className="cd-titulo-nossos-servicos">
                        {lang === "PT" ? "Mergers & Aquisições" : "Mergers & Aquisitions"}
                    </div>
                    <div className="cd-conteudo-nossos-servicos">
                        Fusões & Aquisições<br/>Spin-offs<br/>Fairness opinions<br/>Valuations<br/>Planejamento
                        Estratégico<br/>Joint Venture & Partnership
                    </div>
                </div>

                <div className="cd-nossos-servicos">
                    <div className="cd-logo-nossos-servicos">
                        <img className="Icone" src="imagens/icone2.png" alt="Ícone 2"/>
                    </div>
                    <div className="cd-titulo-nossos-servicos">
                        {lang === "PT" ? "Consultoria Especializada" : "Specialized Consulting"}
                    </div>
                    <div className="cd-conteudo-nossos-servicos">
                        Análise macroeconômica e setorial<br/>Entendimento de pontos críticos e definição de
                        plano de ação<br/>Estruturação e execução de plano de ação
                    </div>
                </div>

                <div className="cd-nossos-servicos">
                    <div className="cd-logo-nossos-servicos">
                        <img className="Icone" src="imagens/icone3.png" alt="Ícone 3"/>
                    </div>
                    <div className="cd-titulo-nossos-servicos">
                        {lang === "PT" ? "Dívida Estruturada" : "Structured Debt"}

                    </div>
                    <div className="cd-conteudo-nossos-servicos">
                        Debêntures<br/>CRA, CRI e FIDC<br/>Entre outros produtos
                    </div>
                </div>
            </div>

            <div className="dv-nossos-servicos-botao">
                <div>
                    <div className="Graficopequeno1">
                        <div className="Coluna1"
                             style={{height: '45px', opacity: 0.30, background: '#D9D9D9'}}></div>
                        <div className="Coluna2"
                             style={{height: '113px', opacity: 0.30, background: '#EFEFEF'}}></div>
                        <div className="Coluna3"
                             style={{height: '184px', opacity: 0.30, background: '#577FA4'}}></div>
                    </div>
                </div>

            <div className="btn-nossos-servicos">
                <Botao
                    href={"/servicos"}
                    modo={1}
                    texto={"Nossos serviços"}
                />
            </div>

                <div>
                    <div className="Graficopequeno2">
                        <div className="Coluna1"
                             style={{height: '45px', opacity: 0.30, background: '#D9D9D9'}}></div>
                        <div className="Coluna2"
                             style={{height: '113px', opacity: 0.30, background: '#EFEFEF'}}></div>
                        <div className="Coluna3"
                             style={{height: '184px', opacity: 0.30, background: '#577FA4'}}></div>
                    </div>
                </div>
            </div>
        </NossosServicosStyle>
    );
}

export default NossosServicos;
