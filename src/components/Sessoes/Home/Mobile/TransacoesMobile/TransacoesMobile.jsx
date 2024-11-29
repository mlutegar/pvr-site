import {useState, useEffect, useContext} from 'react';
import {TransacoesMobileStyle} from "./Style";
import transacoesData from "../../../../../data/transacoesdata.json";
import TransacaoCard from "../../../../Itens/TransacaoCard/TransacaoCard";
import Botao from "../../../../Itens/Botao/Botao";
import {LangContext} from "../../../../../context/LangContext";
import TransacaoCardMobile from "../../../../Itens/TransacaoCardMobile/TransacaoCardMobile";

const TransacoesMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);
    const [transacoes, setTransacoes] = useState(transacoesData);
    const { lang, setLang } = useContext(LangContext);

    const renderTransacoes = () => {
        const visibleTransacoes = transacoes.slice(currentIndex, currentIndex + visibleCards);
        return visibleTransacoes.map((transacao, index) => {
            return (
                <TransacaoCardMobile
                    key={index}
                    transacao={transacao}
                    numero={index}
                    style={{ height: `250px` }}
                />
            );
        });
    };

    const handleNext = () => {
        if (currentIndex + 3 >= transacoes.length) return;
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrevious = () => {
        if (currentIndex === 0) return;
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        renderTransacoes();
    }, [currentIndex]);

    return (
        <TransacoesMobileStyle>
            <div className="titulo">
                <div className="titulo-principal">
                    {lang === "PT" ? "Transações" : "Transactions"}
                </div>
                <div className="subtitulo">
                    {lang === "PT" ? "Nossas últimas transações" : "Our latest transactions"}
                </div>
            </div>

            <div className="conteudo">
                <div className="cards">
                    {renderTransacoes()}
                </div>
            </div>

            <div className="botoes">
                <div className="botao1">
                    <button className="botao seta1" onClick={handlePrevious} disabled={currentIndex === 0}>
                        <img src="imagens/seta2.png" alt="Transação anterior"/>
                    </button>
                </div>

                <div className="botao2">

                    <button className="botao seta2" onClick={handleNext} disabled={currentIndex >= 2}>
                        <img src="imagens/seta2.png" alt="Próxima transação"/>
                    </button>
                </div>
            </div>

            <div className="dv-paginacao">
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="8" viewBox="0 0 78 8" fill="none">
                    <path
                        d="M4 4L19.6274 4"
                        stroke={currentIndex === 0 ? "#577FA4" : "#D0D0D0"} // Cor do primeiro "ponto"
                        strokeWidth="7"
                        strokeLinecap="round"
                    />
                    <path
                        d="M31.0405 4L46.6679 4"
                        stroke={currentIndex === 1 ? "#577FA4" : "#D0D0D0"} // Cor do segundo "ponto"
                        strokeWidth="7"
                        strokeLinecap="round"
                    />
                    <path
                        d="M58.3726 4L73.9999 4"
                        stroke={currentIndex === 2 ? "#577FA4" : "#D0D0D0"} // Cor do terceiro "ponto"
                        strokeWidth="7"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className={"divbotao"}>
                <Botao
                    href={"/transacoes"}
                    modo={2}
                    texto={"Veja todas"}
                />
            </div>
        </TransacoesMobileStyle>
    );
};

export default TransacoesMobile;
