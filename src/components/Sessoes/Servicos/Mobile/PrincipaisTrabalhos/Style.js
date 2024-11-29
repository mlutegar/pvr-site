import styled from "styled-components"

const PrincipaisTrabalhosMobileStyle = styled.header`
    display: none;
    padding: 10px 10px;
    font-family: Montserrat, sans-serif;
    flex-direction: column;
    text-align: center;

    .titulo {
        margin-top: 40px;
        color: #44617C;
        font-size: var(--subtitulo);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .conteudo {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        color: #000;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
    }

    .parte1 {
        margin: 0px 10px;
        border-bottom: 2px solid #44617C;
        padding-bottom: 10px;
    }

    .parte2{
        margin-top: 10px;
    }

    ul {
        padding: 0 40px;
    //    remover o ponto da lista
        list-style-type: none;
    }

    li {
        margin-top: 10px;
    }

    .imagem {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        /* width: 100%; */
        padding: 0 70px;
    }

    img {
        width: 80%;
        flex-shrink: 0;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }

`

export {PrincipaisTrabalhosMobileStyle}