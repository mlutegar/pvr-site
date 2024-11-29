import styled from "styled-components";

const BannerStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 0 10px;
    opacity: 0; /* Inicialmente invisível */
    transform: translateY(-20px); /* Começa deslocado para cima */
    animation: bannerFadeIn 1s ease-out forwards; /* Animação */
    margin: 100px 100px 0;
    max-width: 1920px;

    .Titulo {
        font-size: 3.1em;
        padding-bottom: 100px;
    }

    .Titulo-destaque,
    .Titulo-subtitulo {
        display: block;
        color: #44617C;
        font-family: Montserrat, serif;
        font-weight: 700; /* Ajuste para o subtítulo se necessário */
        word-wrap: break-word;
        opacity: 0; /* Inicialmente invisível */
        animation: fadeIn 1s ease-out forwards; /* Animação */
    }

    .Titulo-subtitulo {
        font-weight: 100;
        animation-delay: 0.5s; /* Aparece depois do título principal */
    }

    .Grafico {
        display: flex;
        font-size: 16px;
        gap: 20px;
        align-items: flex-end;
        opacity: 0;
        animation: slideUp 1.2s ease-out forwards;
        animation-delay: 0.7s;
        bottom: 0;
        position: absolute;
        right: 0;
    }

    .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
        width: 80px;
        opacity: 0.60;
    }

    .Coluna1 {
        background: #E8E8E8;
        height: 84px;
    }

    .Coluna2 {
        background: #577FA4;
        height: 188px;
    }

    .Coluna3 {
        background: #44617C;
        height: 396px;
    }

    .Coluna4 {
        background: #D0D0D0;
        height: 485px;
    }

    @media screen and (max-width: 768px) {
        height: 620px;
        opacity: 0;
        flex-direction: column;
        padding: 0;
        position: relative;
        margin: 0 35px;

        .Titulo {
            font-size: 3.3em;
            padding-bottom: 130px;
            padding-top: 50px;
        }

        .Grafico {
            position: absolute;
            gap: 10px;
            right: 0;
        }

        .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
            width: 72px;
            opacity: 0.22;

        }

        .Coluna1 {
            height: 180px;
            background: #E8E8E8;
        }

        .Coluna2 {
            height: 284px;
            background: #577FA4;
        }

        .Coluna3 {
            height: 452px;
            background: #44617C;
        }

        .Coluna4 {
            height: 620px;
            background: #D0D0D0;
        }
    }

    /* Keyframes para as animações */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes bannerFadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export {BannerStyle};
