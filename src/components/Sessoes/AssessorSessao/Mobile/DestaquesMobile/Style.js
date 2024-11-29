import styled from "styled-components"

const DestaquesMobileStyle = styled.header`
    display: none;
    padding: 10px 10px;
    background: #44617C;
    font-family: Montserrat, sans-serif;

    width: 100%;
    text-align: center;
    flex-direction: column;

    .titulo {
        color: #FFF;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    
    .conteudo {
        display: flex;
        justify-content: center;
        margin-top: 130px;
        margin-bottom: 50px;

        color: #FFF;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .coluna1 {
        padding-right: 5%;
        border-right: 2px solid #577FA4;
    }

    .coluna2 {
        padding-left: 5%;
    }

    .Graficopequeno1 {
        transform: scaleX(-1);
        justify-content: center;
        align-items: flex-end;
        gap: 29px;
        display: inline-flex;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export {DestaquesMobileStyle}