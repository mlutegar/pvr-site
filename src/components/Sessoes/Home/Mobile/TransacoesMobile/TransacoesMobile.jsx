import {useState, useEffect, useContext} from 'react';
import {TransacoesMobileStyle} from "./Style";
import transacoesData from "../../../../../data/transacoesdata.json";
import TransacaoCard from "../../../../Itens/TransacaoCard/TransacaoCard";
import Botao from "../../../../Itens/Botao/Botao";
import {LangContext} from "../../../../../context/LangContext";

const TransacoesMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [visibleCards, setVisibleCards] = useState(1);

    const [isAnimating, setIsAnimating] = useState(false);
    const [transacoes, setTransacoes] = useState(transacoesData);
    const { lang, setLang } = useContext(LangContext);

    const renderTransacoes = () => {
        const visibleTransacoes = transacoes.slice(currentIndex, currentIndex + visibleCards);
        return visibleTransacoes.map((transacao, index) => {
            return (
                <TransacaoCard
                    key={index}
                    transacao={transacao}
                    numero={index}
                />
            );
        });
    };

    const handleNext = () => {
        if (isAnimating || currentIndex + 3 >= transacoes.length) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setIsAnimating(false);
        }, 500); // duração da animação
    };

    const handlePrevious = () => {
        if (isAnimating || currentIndex === 0) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            setIsAnimating(false);
        }, 500); // duração da animação
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
                {/*<button className="botao seta1" onClick={handlePrevious}>*/}
                {/*    <img src="imagens/seta2.png" alt="Transação anterior"/>*/}
                {/*</button>*/}

                <div className="cards">
                    {renderTransacoes()}
                </div>

                {/*<button className="botao seta2" onClick={handleNext}>*/}
                {/*    <img src="imagens/seta2.png" alt="Próxima transação"/>*/}
                {/*</button>*/}
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
