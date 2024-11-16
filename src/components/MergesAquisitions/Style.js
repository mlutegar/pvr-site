import styled from "styled-components"

const MergesAquisitionsStyle = styled.header`
    padding: 100px 150px 0;
    display: flex;

    .imagem {
        width: 794px;
        height: 631px;
        flex-shrink: 0;
    }

    .conteudo {
        padding: 0 0 0 50px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .titulo {
        color: #44617C;
        font-family: Montserrat;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 60px;
    }

    .descricao {
        color: #000;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 35px; /* 175% */
        margin-bottom: 20px;
    }

    .exemplo {
        display: flex;
        gap: 50px;
        margin-top: 50px;
    }

    .imagem1 {
        border-right: 1px solid #44617C;

        & img {
            width: 259px;
            height: 127px;
            flex-shrink: 0;
        }
    }

    .imagem2 {
        & img {
            width: 221px;
            height: 157px;
            flex-shrink: 0;
        }
    }

`

export {MergesAquisitionsStyle}