// TransacaoCard.js
import React from "react";
import {TransacaoCardStyle} from "./Style";

const TransacaoCard = ({transacao, numero, style}) => {
    return (
        <TransacaoCardStyle>
            <div key={numero} className="Card" style={style}>
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
