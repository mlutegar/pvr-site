import styled from "styled-components"

const TransacoesInteiroMobileStyle = styled.header`
    display: none;
    background-color: #44617c;
    font-family: Montserrat, serif;
    text-align: center;
    flex-direction: column;

    .titulo-principal {
        margin-top: 40px;
        color: #FFF;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .paginacao {
        position: relative;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    
    .botoes{
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;

        button {
            width: 10px;
            height: 10px;
            padding: 10px;
            margin: 0 40px;
        }
    }
    
    .dv-paginacao{
        margin-bottom: 50px;
    }
    

    .header {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        flex-direction: column;
    }

    .titulo-secundario {
        color: #FFF;
        font-size: var(--subtitulo);
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        opacity: 0.6;
    }
    
    .pesquisa {
        position: relative;
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .input-pesquisa-container {
        position: relative;
        width: 80%;
        background: #FFF;
        border: 2px solid #577FA4;
    }

    .icone-pesquisa {
        position: absolute;
        top: 27%;
        left: 10px;

    }

    .input-pesquisa {
        padding: 10px 10px 10px 50px;
        flex-shrink: 0;
        background: none;
        border: none;

        &:focus {
            border: none;
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
        margin-top: 35px;
    }

    .linha1 {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 40px;
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