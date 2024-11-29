import {NossosServicosMobileStyle} from "./Style";
import Botao from "../../../Itens/Botao/Botao";
import {LangContext} from "../../../../context/LangContext";
import {useContext, useState} from "react";

// servicosInfo: json com as informações dos serviços
const servicosInfo = {
    "Merger & Aquisitions": {
        "img": "imagens/icone1.png", "EN": {
            "titulo": "Mergers & Aquisitions",
            "conteudo": ["Mergers & Aquisitions", "Spin-offs", "Fairness opinions", "Valuations", "Strategic Planning", "Joint Venture & Partnership"]
        }, "PT": {
            "titulo": "Mergers & Aquisições",
            "conteudo": ["Fusões & Aquisições", "Spin-offs", "Fairness opinions", "Valuations", "Planejamento Estratégico", "Joint Venture & Partnership"]
        }
    }, "Specialized Consulting": {
        "img": "imagens/icone2.png", "EN": {
            "titulo": "Specialized Consulting",
            "conteudo": ["Macroeconomic and sectoral analysis", "Understanding critical points and defining action plan", "Structuring and executing action plan"]
        }, "PT": {
            "titulo": "Consultoria Especializada",
            "conteudo": ["Análise macroeconômica e setorial", "Entendimento de pontos críticos e definição de plano de ação", "Estruturação e execução de plano de ação"]
        }
    }, "Structured Debt": {
        "img": "imagens/icone3.png", "EN": {
            "titulo": "Structured Debt", "conteudo": ["Debentures", "CRA, CRI and FIDC", "Among other products"]
        }, "PT": {
            "titulo": "Dívida Estruturada", "conteudo": ["Debêntures", "CRA, CRI e FIDC", "Entre outros produtos"]
        }
    }
}

const NossosServicosMobile = () => {
    const {lang, setLang} = useContext(LangContext);
    const [page, setPage] = useState(0);

    return (<NossosServicosMobileStyle>
            <div className="dv-nossos-servicos-titulo">
                {lang === "PT" ? "Nossos Serviços" : "Our Services"}
            </div>
            <div className="dv-nossos-servicos-conteudo">

                {/*Slide de cards*/}
                {Object.keys(servicosInfo).slice(page * 1, (page + 1) * 1).map((servico, index) => {
                    return (<div key={index} className="cd-nossos-servicos">
                            <div className="cd-logo-nossos-servicos">
                                <img className="Icone" src={servicosInfo[servico].img} alt={`Ícone ${index + 1}`}/>
                            </div>
                            <div className="cd-titulo-nossos-servicos">
                                {servicosInfo[servico][lang].titulo}
                            </div>
                            <div className="cd-conteudo-nossos-servicos">
                                {/*Aqui pega a lista de conteudo e transforma em uma lista*/}
                                {servicosInfo[servico][lang].conteudo.map((item, index) => {
                                    return (<div key={index} className="cd-item-nossos-servicos">
                                            {item}
                                        </div>);
                                })}
                            </div>
                        </div>);
                })}
            </div>

            {/*Botões de navegação*/}
            <div className="dv-nossos-servicos-botoes">
                <div className="dv-nossos-servicos-botoes-esquerda">
                    <Botao
                        onClick={() => setPage(page - 1)}
                        disabled={page === 0}
                        texto={"<"}
                        modo={2}
                    />
                </div>
                <div className="dv-nossos-servicos-botoes-direita">
                    <Botao
                        onClick={() => setPage(page + 1)}
                        disabled={page === Object.keys(servicosInfo).length - 1}
                        texto={">"}
                        modo={2}
                    >
                    </Botao>
                </div>
            </div>

            <div className="dv-nossos-servicos-botao">
                <div>
                    <div className="Graficopequeno1">
                        <div className="Coluna1"
                             style={{width: '80px', height: '45px', opacity: 0.30, background: '#D9D9D9'}}></div>
                        <div className="Coluna2"
                             style={{width: '80px', height: '113px', opacity: 0.30, background: '#EFEFEF'}}></div>
                        <div className="Coluna3"
                             style={{width: '80px', height: '184px', opacity: 0.30, background: '#577FA4'}}></div>
                    </div>
                </div>

                <div className="btn-nossos-servicos">
                    <Botao
                        href={"/servicos"}
                        modo={1}
                        texto={"Saiba mais"}
                    />
                </div>

                <div>
                    <div className="Graficopequeno2">
                        <div className="Coluna1"
                             style={{width: '80px', height: '45px', opacity: 0.30, background: '#D9D9D9'}}></div>
                        <div className="Coluna2"
                             style={{width: '80px', height: '113px', opacity: 0.30, background: '#EFEFEF'}}></div>
                        <div className="Coluna3"
                             style={{width: '80px', height: '184px', opacity: 0.30, background: '#577FA4'}}></div>
                    </div>
                </div>
            </div>
        </NossosServicosMobileStyle>);
}

export default NossosServicosMobile;
