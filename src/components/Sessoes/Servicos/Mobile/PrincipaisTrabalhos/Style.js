import styled from "styled-components"

const PrincipaisTrabalhosMobileStyle = styled.header`
    display: none;
    padding: 10px 10px;
    font-family: Montserrat, sans-serif;
    flex-direction: column;
    text-align: center;

    .titulo {
        margin-top: 50px;
        color: #44617C;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .conteudo {
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        color: #000;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
    }

    .parte1 {
        border-bottom: 2px solid #44617C;
        padding-bottom: 10px;
    }

    ul {
        padding: 0 40px;
    }

    li {
        margin-top: 10px;
    }

    .imagem {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        /* width: 100%; */
        padding: 0 70px;
    }

    img {
        width: 100%;
        flex-shrink: 0;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }

`

export {PrincipaisTrabalhosMobileStyle}