import styled from "styled-components"


const TransacoesMobileStyle = styled.header`
    display: none;
    background: #44617c;
    flex-direction: column;
    position: relative;

    .dv-paginacao {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }

    .botoes {
        position: absolute;
        width: 100%;
        display: flex;
        top: 50%;
        justify-content: space-between;

        img {
            width: 50%;
        }
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .titulo-principal {
        color: white;
        font-size: var(--titulo);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
    }

    .titulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
    }

    .subtitulo {
        opacity: 0.60;
        color: white;
        font-size: var(--subtitulo);
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        word-wrap: break-word;
    }

    .conteudo {
        display: flex;
        justify-content: space-between;
        padding: 50px 35px;
    }

    .botao {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        transition: transform 0.2s ease;
    }

    .seta:hover {
        transform: scale(1.1) rotate(-180deg);
    }

    .seta1 {
        transform: rotate(-180deg); /* Inverte a seta 1 */
    }

    .cards {
        display: flex;
        gap: 10px;
        transition: transform 0.5s;
        align-items: center;
        justify-content: center;
    }

    .divbotao {
        display: flex;
        justify-content: center;
        padding-bottom: 40px;
    }


    @media screen and (max-width: 769px) {
        display: flex;
    }
`

export {TransacoesMobileStyle}