import styled from "styled-components";

const BannerStyle = styled.header`
    .Titulo-destaque,
    .Titulo-subtitulo {
        display: block;
        color: #44617C;
        font-size: 64px;
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
        gap: 20px;
        align-items: flex-end;
        opacity: 0; /* Inicialmente invisível */
        animation: slideUp 1.2s ease-out forwards; /* Animação */
        animation-delay: 0.7s;
    }

    .mp {
        margin: 50px 150px;
        max-width: 1920px;
    }

    .banner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 0 10px;
        margin-top: 50px;
        margin-bottom: 0;
        opacity: 0; /* Inicialmente invisível */
        transform: translateY(-20px); /* Começa deslocado para cima */
        animation: bannerFadeIn 1s ease-out forwards; /* Animação */
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

export { BannerStyle };
