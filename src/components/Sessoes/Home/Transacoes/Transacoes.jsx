import {useState, useEffect, useContext} from 'react';
import {TransacoesStyle} from "./Style";
import transacoesData from "../../../../data/transacoesdata.json";
import TransacaoCard from "../../../Itens/TransacaoCard/TransacaoCard";
import Botao from "../../../Itens/Botao/Botao";
import {LangContext} from "../../../../context/LangContext";

const Transacoes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;
    const [visibleCards, setVisibleCards] = useState(isSmallScreen ? 1 : 3);

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
                    style={index === 1 || index === 3 ? {} : {transform: 'scale(0.85)', opacity: 0.9}}
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
        const mediaQuery = window.matchMedia("(max-width: 1024px)");

        const handleScreenChange = (e) => {
            setVisibleCards(e.matches ? 1 : 3);
        };

        // Adiciona o listener
        mediaQuery.addEventListener("change", handleScreenChange);

        // Cleanup no unmount
        return () => mediaQuery.removeEventListener("change", handleScreenChange);
    }, []);


    useEffect(() => {
        renderTransacoes();
    }, [currentIndex]);

    return (
        <TransacoesStyle>
            <div className="header">
                <div className="titulo">
                    <div className="titulo-principal">
                        {lang === "PT" ? "Transações" : "Transactions"}
                    </div>
                    <div className="subtitulo">
                        {lang === "PT" ? "Nossas últimas transações" : "Our latest transactions"}
                    </div>
                </div>
                <div>
                    <Botao
                        href={"/transacoes"}
                        modo={2}
                        texto={"Ver todas"}
                    />
                </div>
            </div>

            <div className="conteudo">
                <button className="botao seta1" onClick={handlePrevious}>
                    <img src="imagens/seta2.png" alt="Transação anterior"/>
                </button>

                <div className="cards">
                    {renderTransacoes()}
                </div>

                <button className="botao seta2" onClick={handleNext}>
                    <img src="imagens/seta2.png" alt="Próxima transação"/>
                </button>
            </div>
        </TransacoesStyle>
    );
};

export default Transacoes;
