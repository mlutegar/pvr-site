import styled from "styled-components"


const TransacoesStyle = styled.header`
    padding: 50px 0 0;
    background: #44617c;
    display: flex;
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
        padding: 0 100px;
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

    .subtitulo {
        opacity: 0.60;
        color: white;
        font-size: var(--subtitulo);
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        word-wrap: break-word;
        width: 400px;
    }

    .conteudo {
        display: flex;
        justify-content: center;
        padding: 50px 140px;
    }

    .botao {
        margin: 0 100px;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        transition: transform 0.2s ease;

        img {
            width: 100%;
        }

        :hover {
            transform: scale(1.1);
        }
    }

    .seta:hover {
        transform: scale(1.1) rotate(-180deg);
    }

    .seta1 {
        transform: rotate(-180deg); /* Inverte a seta 1 */
    }

    .cards {
        display: flex;
        gap: 30px;
        transition: transform 0.5s;
        align-items: center;
    }

    @media screen and (max-width: 769px) {
        display: none;
    }
`

export {TransacoesStyle}