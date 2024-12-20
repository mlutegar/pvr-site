import styled from "styled-components";

const NossaEquipeStyle = styled.header`
    padding: 50px 100px;

    .div {
        background: white;
        animation: fadeIn 1s ease-in-out;
    }

    .titulo {
        color: #44617c;
        font-size: var(--titulo);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
        animation: slideDown 1s ease-in-out;
    }

    .conteudo {
        display: flex;
        gap: 10rem;
        padding-top: 50px;
        justify-content: center;
        animation: fadeIn 1.5s ease-in-out;
    }

    card {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        width: 450px;
        animation: zoomIn 1s ease-in-out;
    }

    .foto {
        height: 339px;
        cursor: pointer;

        & img {
            width: 326px;
            height: 339px;
            transition: transform 0.3s;
        }

        & img:hover {
            transform: scale(1.05);
        }
    }

    .nome {
        color: #44617c;
        font-size: var(--corpo);
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        word-wrap: break-word;
        margin-top: 25px;

        & span {
            font-weight: 700;
        }
    }

    .botao {
        margin-top: 25px;
        display: flex;
        justify-content: center;
    }

    .btn-ne-co-cd {
        padding: 18px 92px;
        background: none;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: var(--botao);
        font-family: Montserrat, serif;
        font-weight: 400;
        color: #44617c;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s, transform 0.3s;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            transform: scale(0.95);
        }
    }

    .informacoes {
        display: flex;
        animation: fadeIn 2s ease-in-out;
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
        max-width: 280px;
        margin-bottom: 10px;
        animation: fadeIn 2s ease-in-out;

        & li {
            color: #000;
            font-family: Montserrat;
            font-size: var(--corpo);
            font-style: normal;
            font-weight: 400;
            line-height: 35px;
            word-wrap: break-word;
            padding-top: 20px;
            animation: slideIn 1s ease-in-out;
        }
    }

    @media screen and (max-width: 1600px) {
        .conteudo {
            gap: 5rem;
        }

        card {
            width: 400px;
        }

        .foto {
            height: 300px;

            & img {
                width: 300px;
                height: 300px;
            }
        }

        .btn-ne-co-cd {
            padding: 15px 80px;
            font-size: var(--corpo);
        }

        .redes {
            padding-top: 10px;
        }
    }

    @media screen and (max-width: 1440px) {
        card {
            width: 350px;
        }

        .foto {
            height: 250px;

            & img {
                width: 250px;
                height: 250px;
            }
        }

        .btn-ne-co-cd {
            padding: 12px 70px;
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }

    /* Keyframes for animations */
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideDown {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes zoomIn {
        from {
            transform: scale(0.9);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes slideIn {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

export {NossaEquipeStyle};
