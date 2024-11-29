import {useState, useEffect} from 'react';
import {TransacoesInteiroMobileStyle} from "./Style";

import transacoesData from "../../../../../data/transacoesdata.json";
import TransacaoCardMobile from "../../../../Itens/TransacaoCardMobile/TransacaoCardMobile";
import Botao from "../../../../Itens/Botao/Botao";

const TransacoesInteiroMobile = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3; // Defina quantos cards deseja por página
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTransacoes = transacoesData.filter(transacao =>
        transacao.titulo.toLowerCase().includes(searchQuery.toLowerCase())  // Filtra pela correspondência do título
    );

    // Calcule o índice inicial e final dos cards para a página atual
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = filteredTransacoes.slice(startIndex, endIndex);

    // Calcule o número total de páginas
    const totalPages = Math.ceil(filteredTransacoes.length / cardsPerPage);

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

    // Função para lidar com a mudança no campo de pesquisa
    const handleSearchChange = (event) => {
        console.log("handleSearchChange -> event.target.value", event.target.value);
        setSearchQuery(event.target.value);  // Atualiza o estado com o novo valor de pesquisa
        setCurrentPage(1);  // Resetar para a primeira página quando a pesquisa mudar
    };


    return (
        <TransacoesInteiroMobileStyle>
            <div className="titulo-principal">
                Transações
            </div>

            <div className="header">
                <div className="titulo-secundario">
                    Transacões realizadas pelos sócios da PVR Capital.
                </div>

                <div className="pesquisa">
                    <div className="input-pesquisa-container">
                        <img className="icone-pesquisa" src="imagens/lupa1.png" alt="Ícone de pesquisa"/>
                        <input className="input-pesquisa" id="input-pesquisa" type="text" placeholder="Buscar"
                               value={searchQuery}  // Valor do campo de pesquisa
                               onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>

            <div className="transacoes">
                <div className="linha1">
                    {currentCards.map((transacao, index) => (
                        <TransacaoCardMobile key={index} transacao={transacao} isCardMenor={false} numero={index}/>
                    ))}
                </div>
            </div>

            <div className="paginacao">
                <div className="botoes">
                    <div className="botao1">
                        <Botao
                            texto="<"
                            modo={2}
                            href="#"
                            onClick={handlePreviousPage}
                        />
                    </div>

                    <div className="botao2">

                        <Botao
                            texto=">"
                            modo={2}
                            href="#"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        />
                    </div>
                </div>

                <div className="dv-paginacao">
                    <svg xmlns="http://www.w3.org/2000/svg" width="78" height="8" viewBox="0 0 78 8" fill="none">
                        <path
                            d="M4 4L19.6274 4"
                            stroke={currentPage === 1 ? "#577FA4" : "#D0D0D0"} // Cor do primeiro "ponto"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                        <path
                            d="M31.0405 4L46.6679 4"
                            stroke={currentPage === 2 ? "#577FA4" : "#D0D0D0"} // Cor do segundo "ponto"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                        <path
                            d="M58.3726 4L73.9999 4"
                            stroke={currentPage === 3 ? "#577FA4" : "#D0D0D0"} // Cor do terceiro "ponto"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

            </div>
        </TransacoesInteiroMobileStyle>
    );
};

export default TransacoesInteiroMobile;
