import styled from "styled-components"

const TransacoesInteiroMobileStyle = styled.header`
    display: none;
    background-color: #44617c;
    padding: 10px 10px;
    font-family: Montserrat,serif;

    width: 100%;
    text-align: center;
    flex-direction: column;

    .titulo-principal {
        color: #FFF;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    .header {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .titulo-secundario {
        color: #FFF;
        font-size: var(--subtitulo);
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        opacity: 0.6;
    }
    
    .icone-pesquisa {
        position: relative;
        left: 40px;
    }

    .input-pesquisa {
        width: 423px;
        height: 58px;
        flex-shrink: 0;

        border: 2px solid #577FA4;
        background: #FFF;
        padding-left: 50px;

        & :focus {
            border: 2px solid #577FA4;
        }

        &::placeholder {

            color: #577FA4;
            font-family: Montserrat;
            font-size: var(--corpo);
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
    
    .transacoes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 100px;
        margin-bottom: 50px;
        margin-top: 100px;
    }

    .linha1 {
        display: flex;
        justify-content: space-between;
    }

    .linha2 {
        display: flex;
        justify-content: space-between;
    }
    
    .paginacao {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 50px;
    }

    button {
        border-radius: 5px;
        font-family: Montserrat;
        font-size: var(--botao);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding: 10px 20px;
    }

    span {
        color: #FFF;
        font-family: Montserrat;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export {TransacoesInteiroMobileStyle}