import styled from "styled-components"

const NossaEquipeStyle = styled.header`
    padding: 50px 150px;

    .dv-nossa-equipe {
        background: white;
    }

    .dv-ne-titulo {
        color: #44617c;
        font-size: 40px;
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
    }

    .dv-ne-conteudo {
        display: flex;
        gap: 10rem;
        padding-top: 50px;
        justify-content: center;
    }

    .dv-ne-co-card {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        width: 450px;
    }

    .dv-ne-co-cd-foto {
        height: 339px;

        & img {
            width: 326px;
            height: 339px;
        }
    }

    .dv-ne-co-cd-nom {
        color: #44617c;
        font-size: 24px;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        word-wrap: break-word;

        & span {
            font-weight: 700;
        }
    }

    .dv-ne-co-cd-btn {
        display: flex;
        justify-content: center;
    }

    .btn-ne-co-cd {
        padding: 18px 92px;
        background: none;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: 24px;
        font-family: Montserrat, serif;
        font-weight: 400;
        color: #44617c;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s, transform 0.3s;
    }

    .informacoes {
        display: flex;
    }

    .ativo {
        transform: rotate(180deg) scale(1.1);
    }

    .redes {
        display: flex;
        gap: 20px;
        border-top: 1px solid #44617c;
        align-items: flex-end;
        justify-content: center;
        flex-direction: row;
        padding-top: 20px;

        & a:hover img {
            transform: scale(1.1);
            cursor: pointer;
        }

        & a:active img {
            transform: scale(0.9);
        }

        & img {
            transition: transform 0.3s;
        }


    }

    .ul-informacoes {
        height: 750px;
        margin-bottom: 10px;

        & li {
            color: #000;
            font-family: Montserrat;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 35px; /* 145.833% */

            word-wrap: break-word;
            padding-top: 20px;
        }
    }

`

export {NossaEquipeStyle}