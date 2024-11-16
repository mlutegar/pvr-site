// TransacaoCard.js
import React from "react";
import {TransacaoCardStyle} from "./Style";

const TransacaoCard = ({transacao, isCardMenor, numero}) => {
    return (
        <TransacaoCardStyle>
            <div key={numero} className={`Card ${isCardMenor ? "card-menor" : ""} card${numero + 1}`}>
                <div className="Fundo-box">
                    <div className="Imagens">
                        <img className="Imagemempresa2" src={transacao.imagem1} alt="Imagem Empresa 1"/>
                        <div className="Br"></div>
                        <img className="Imagemempresa1" src={transacao.imagem2} alt="Imagem Empresa 2"/>
                    </div>
                    <div className="Conteudo-texto">
                        <div className="Titulo-transacao">{transacao.titulo}</div>
                        <div className="Descricao Descricao-transacao">{transacao.descricao}</div>
                    </div>
                </div>
            </div>
        </TransacaoCardStyle>
    );
};

export default TransacaoCard;
