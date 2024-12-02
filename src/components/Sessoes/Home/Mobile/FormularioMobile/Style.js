import styled from "styled-components"

const FormularioMobileStyle = styled.header`
    display: none;
    background: #44617c;
    flex-direction: column;
    justify-content: center;

    .div{
        margin: 50px 20px;
    }
    
    .titulo {
        color: white;
        font-size: var(--titulo);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
    }

    .titulo-principal {
        color: white;
        font-size: var(--titulo);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
    }

    .titulo-subtitulo {
        opacity: 0.6;
        color: white;
        font-size: var(--subtitulo);
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        word-wrap: break-word;
    }

    .dv-fo-conteudo {
        color: white;
        padding-top: 20px;
    }

    .dv-fo-co-parte1 {
        display: flex;
        gap: 20px;
    }

    .dv-fo-co-parte2 {
        padding-top: 20px;
        display: flex;
        gap: 50px;
    }

    .dv-fo-co-item-button {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        align-items: flex-end;
        justify-content: flex-end;

        & button {
            border: none;
            padding-top: 18px;
            padding-bottom: 19px;
            padding-left: 55px;
            padding-right: 55px;
            background: #577FA4;
            border-radius: 15px;
            overflow: hidden;
            justify-content: center;
            align-items: center;
            display: inline-flex;

            color: white;
            font-size: var(--botao);
            font-family: Montserrat, sans-serif;
            font-weight: 400;
            word-wrap: break-word;
        }
    }

    .dv-fo-co-item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;

        color: #FFF;
        font-family: Montserrat;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        & input {
            width: 100%;
            height: 62px;
        }

        & textarea {
            height: 133px;
        }
    }
    
    .mensagem {
        width: 350%;
    }
    
    @media (max-width: 768px) {
        display: flex;
        
        .dv-fo-co-parte1 {
            flex-direction: column;
        }
        
        .dv-fo-co-parte2 {
            flex-direction: column;
        }

        .mensagem {
            width: auto;
        }

        .dv-fo-co-item-button {
            align-items: center;
        }
    }
`

export {FormularioMobileStyle}