import styled from "styled-components";

const NossaHistoriaStyle = styled.header`
    .div-nossa-historia {
        display: flex;
        padding: 50px 150px;
        opacity: 0; /* Inicialmente invisível */
        transform: translateY(20px); /* Começa deslocado para baixo */
        animation: fadeInUp 1s ease-out forwards; /* Animação para a seção inteira */
    }

    .nossa-historia {
        background: #f5f5f5;
    }

    .conteudo-nossa-historia {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 60px;
        opacity: 0;
        animation: fadeInText 1s ease-out forwards;
        animation-delay: 0.2s; /* Aparece depois da seção */
    }

    .imagem-nossa-historia {
        & img {
            width: 818px;
            height: 647px;
            opacity: 0; /* Inicialmente invisível */
            transform: translateX(-30px); /* Deslocado para a esquerda */
            animation: slideInLeft 1s ease-out forwards;
            animation-delay: 0.4s; /* Aparece depois do texto */
        }
    }

    .titulo-nossa-historia {
        margin-bottom: 20px;
    }

    .titulo-principal-nossa-historia {
        color: rgb(68, 97, 124);
        font-size: 40px;
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        overflow-wrap: break-word;
        opacity: 0; /* Invisível no início */
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.2s; /* Começa após a entrada da seção */
    }

    .subtitulo-nossa-historia {
        color: rgb(87, 127, 164);
        font-size: 24px;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        overflow-wrap: break-word;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.4s; /* Aparece depois do título */
    }

    .corpo-nossa-historia {
        margin-top: 100px;
        color: black;
        font-size: 20px;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 35px;
        word-wrap: break-word;
        opacity: 0; /* Invisível no início */
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.6s; /* Aparece depois do subtítulo */
    }

    /* Keyframes para animações */
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

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInText {
        from {
            opacity: 0;
            transform: translateY(15px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export { NossaHistoriaStyle };
