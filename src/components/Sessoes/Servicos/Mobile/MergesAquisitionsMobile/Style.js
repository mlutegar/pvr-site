import styled from "styled-components"

const MergesAquisitionsMobileStyle = styled.header`
    display: none;
    padding: 10px 10px;
    flex-direction: column;
    font-family: Montserrat,sans-serif;
    text-align: center;

    .imagem {
        padding: 0 20px;
        margin-top: 20px;
        flex-shrink: 0;
        img {
            width: 100%;
        }
    }

    .conteudo {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .titulo {
        color: #44617C;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 20px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .descricao {
        text-align: center;
        color: #000;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
    }

    .exemplo {
        display: flex;
        /* gap: 50px; */
        margin-top: 35px;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-direction: row;
    }
    
    .imagem1, .imagem2 {
        & img {
            width: 80%;
        }
    }

    .imagem1 {
        border-right: 1px solid #44617C;
        display: flex;
        justify-content: left;
    }

    .imagem2 {
        display: flex;
        justify-content: right;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }

`

export {MergesAquisitionsMobileStyle}