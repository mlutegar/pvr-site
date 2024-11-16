import {useState, useEffect} from 'react';
import {TransacoesStyle} from "./Style";
import transacoesData from "../../../../data/transacoesdata.json";
import TransacaoCard from "../../../TransacaoCard/TransacaoCard";
import Botao from "../../../Itens/Botao/Botao";

const Transacoes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [transacoes, setTransacoes] = useState(transacoesData);

    const renderTransacoes = () => {
        const visibleTransacoes = transacoes.slice(currentIndex, currentIndex + 3);
        return visibleTransacoes.map((transacao, index) => (
            <TransacaoCard
                key={index}
                transacao={transacao}
                isCardMenor={index === 0 || index === 2}
                numero={index}
            />
        ));
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
        <TransacoesStyle>
            <div className="header">
                <div className="titulo">
                    <div className="titulo-principal">Transações</div>
                    <div className="subtitulo">Nossas últimas transações</div>
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
