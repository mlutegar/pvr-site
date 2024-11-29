import {NossosServicosMobileStyle} from "./Style";
import Botao from "../../../../Itens/Botao/Botao";
import {LangContext} from "../../../../../context/LangContext";
import {useContext, useEffect, useState} from "react";

// servicosInfo: json com as informações dos serviços
const servicosInfo = {
    "Merger & Aquisitions": {
        "img": "imagens/icone1.svg", "EN": {
            "titulo": "Mergers & Aquisitions",
            "conteudo": ["Mergers & Aquisitions", "Spin-offs", "Fairness opinions", "Valuations", "Strategic Planning", "Joint Venture & Partnership"]
        }, "PT": {
            "titulo": "Mergers & Aquisições",
            "conteudo": ["Fusões & Aquisições", "Spin-offs", "Fairness opinions", "Valuations", "Planejamento Estratégico", "Joint Venture & Partnership"]
        }
    }, "Specialized Consulting": {
        "img": "imagens/icone2.svg", "EN": {
            "titulo": "Specialized Consulting",
            "conteudo": ["Macroeconomic and sectoral analysis", "Understanding critical points and defining action plan", "Structuring and executing action plan"]
        }, "PT": {
            "titulo": "Consultoria Especializada",
            "conteudo": ["Análise macroeconômica e setorial", "Entendimento de pontos críticos e definição de plano de ação", "Estruturação e execução de plano de ação"]
        }
    }, "Structured Debt": {
        "img": "imagens/icone3.svg", "EN": {
            "titulo": "Structured Debt", "conteudo": ["Debentures", "CRA, CRI and FIDC", "Among other products"]
        }, "PT": {
            "titulo": "Dívida Estruturada", "conteudo": ["Debêntures", "CRA, CRI e FIDC", "Entre outros produtos"]
        }
    }
}

const NossosServicosMobile = () => {
    const {lang, setLang} = useContext(LangContext);
    const [page, setPage] = useState(0);
    const [altura, setAltura] = useState(0);

    // usseEffect para redimensionar o tamanho da div de acordo com o tamanho do conteudo
    useEffect(() => {
        const ajustarAlturaSlider = () => {
            const cards = document.querySelectorAll('.cd-nossos-servicos');
            const altura = Math.max(...Array.from(cards).map(card => card.offsetHeight));

            console.log("ajustarAlturaSlider -> altura", altura);

            setAltura(altura);
        };

        ajustarAlturaSlider();

        window.addEventListener('resize', ajustarAlturaSlider);

        return () => window.removeEventListener('resize', ajustarAlturaSlider);
    }, []);

    return (<NossosServicosMobileStyle>
        <div className="titulo">
            {lang === "PT" ? "Nossos Serviços" : "Our Services"}
        </div>
        <div className="conteudo" style={{height: altura}}>

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
                            <ul>
                                {/*Aqui pega a lista de conteudo e transforma em uma lista*/}
                                {servicosInfo[servico][lang].conteudo.map((item, index) => {
                                    return (<li key={index} className="cd-item-nossos-servicos">
                                        {item}
                                    </li>);
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>

        {/*Botões de navegação*/
        }
        <div className="dv-nossos-servicos-botoes">
            <div className="dv-nossos-servicos-botoes-esquerda">
                <button className="botaoSeta"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 0}
                >
                    <img src="imagens/seta1.png" alt="Transação anterior"/>
                </button>
            </div>
            <div className="dv-nossos-servicos-botoes-direita">
                <button className="botaoSeta"
                    onClick={() => setPage(page + 1)}
                    disabled={page === Object.keys(servicosInfo).length - 1}
                >
                    <img src="imagens/seta2.png" alt="Próximo"/>
                </button>
            </div>
        </div>

        <div className="dv-paginacao">
            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="8" viewBox="0 0 78 8" fill="none">
                <path
                    d="M4 4L19.6274 4"
                    stroke={page === 0 ? "#577FA4" : "#D0D0D0"} // Cor do primeiro "ponto"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
                <path
                    d="M31.0405 4L46.6679 4"
                    stroke={page === 1 ? "#577FA4" : "#D0D0D0"} // Cor do segundo "ponto"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
                <path
                    d="M58.3726 4L73.9999 4"
                    stroke={page === 2 ? "#577FA4" : "#D0D0D0"} // Cor do terceiro "ponto"
                    strokeWidth="7"
                    strokeLinecap="round"
                />
            </svg>
        </div>

        <div className="dv-nossos-servicos-botao">
            <div className="btn-nossos-servicos">
                <Botao
                    href={"/servicos"}
                    modo={1}
                    texto={"Saiba mais"}
                />
            </div>
        </div>
    </NossosServicosMobileStyle>)
        ;
}

export default NossosServicosMobile;
