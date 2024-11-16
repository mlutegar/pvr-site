import styled from "styled-components"

const FormularioStyle = styled.header`
    .dv-formulario {
        background: #44617c;
        padding: 50px 150px;
    }

    .dv-fo-titulo {
        color: white;
        font-size: 40px;
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
    }

    .dv-fo-titulo-principal {
        color: white;
        font-size: 40px;
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
    }

    .dv-fo-titulo-subtitulo {
        opacity: 0.6;
        color: white;
        font-size: 24px;
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
        gap: 50px;
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
            width: 200px;
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
            font-size: 24px;
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
        font-size: 15px;
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
`

export {FormularioStyle}