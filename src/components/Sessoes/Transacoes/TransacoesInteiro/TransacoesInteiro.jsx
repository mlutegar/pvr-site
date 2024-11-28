import {useState, useEffect} from 'react';
import {TransacoesInteiroStyle} from "./Style";

import transacoesData from "../../../../data/transacoesdata.json";
import TransacaoCard from "../../../Itens/TransacaoCard/TransacaoCard";
import Botao from "../../../Itens/Botao/Botao";

const TransacoesInteiro = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6; // Defina quantos cards deseja por página

    // Calcule o índice inicial e final dos cards para a página atual
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = transacoesData.slice(startIndex, endIndex);

    // Calcule o número total de páginas
    const totalPages = Math.ceil(transacoesData.length / cardsPerPage);

    // Função para mudar para a página anterior
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    // Função para mudar para a próxima página
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };


    return (
        <TransacoesInteiroStyle>
            <div className="titulo-principal">
                Transações
            </div>

            <div className="header">
                <div className="titulo-secundario">
                    Transacões realizadas pelos sócios da PVR Capital.
                </div>

                <div className="pesquisa">
                    <img className="icone-pesquisa" src="imagens/lupa1.png" alt="Ícone de pesquisa"/>
                    <input className="input-pesquisa" id="input-pesquisa" type="text" placeholder="Buscar"/>
                </div>
            </div>

            <div className="transacoes">
                <div className="linha1">
                    {transacoesData.slice(startIndex, (endIndex/2)).map((transacao, index) => (
                        <TransacaoCard key={index} transacao={transacao} isCardMenor={false} numero={index}/>
                    ))}
                </div>

                <div className="linha2">
                    {transacoesData.slice((endIndex/2), endIndex).map((transacao, index) => (
                        <TransacaoCard key={index + 3} transacao={transacao} isCardMenor={false}
                                       numero={index + 3}/>
                    ))}
                </div>
            </div>

            <div className="paginacao">
                <Botao
                    texto="Anterior"
                    modo={2}
                    href="#"
                    onClick={handlePreviousPage}
                />
                <span>Página {currentPage} de {totalPages}</span>
                <Botao
                    texto="Próxima"
                    modo={2}
                    href="#"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                />
            </div>
        </TransacoesInteiroStyle>
    );
};

export default TransacoesInteiro;
