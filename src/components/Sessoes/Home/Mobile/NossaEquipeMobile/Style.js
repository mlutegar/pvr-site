import styled from "styled-components";

const NossaEquipeMobileStyle = styled.header`
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 50px 10px;
    width: auto;

    .div {
        background: white;
        animation: fadeIn 1s ease-in-out;
    }

    .titulo {
        text-align: center;
        color: #44617c;
        font-size: var(--titulo);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
        animation: slideDown 1s ease-in-out;
    }

    .conteudo {
        display: flex;
        gap: 20px;
        padding-top: 50px;
        justify-content: center;
        animation: fadeIn 1.5s ease-in-out;
        flex-direction: column;
    }

    card {
        display: flex;
        gap: 20px;
        align-items: center;
        width: 450px;
        animation: zoomIn 1s ease-in-out;
        flex-direction: column;
    }

    .foto {
        & img {
            width: 200px;
            height: 200px;
            transition: transform 0.3s;
        }

        & img:hover {
            transform: scale(1.05);
        }
    }

    .nome {
        display: flex
    ;
        color: #44617c;
        font-size: var(--corpo);
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        text-align: left;
        padding-left: 10px;
        flex-direction: column;
        justify-content: center;
        flex-wrap: nowrap;
        align-items: flex-start;

        p {

            word-wrap: break-word;
            align-items: center;
            padding: 10px;
        }
    }

    span {
        font-weight: 700;
    }

    .botao {
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

    .pessoa {
        display: flex;
        flex-direction: row;
    }


    .ul-informacoes {
        animation: fadeIn 2s ease-in-out;

        & li {
            color: #000;
            font-size: var(--corpo);
            font-style: normal;
            font-weight: 400;
            word-wrap: break-word;
            animation: slideIn 1s ease-in-out;
            padding: 20px 50px;
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
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

export {NossaEquipeMobileStyle};
