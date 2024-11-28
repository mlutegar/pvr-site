import styled from "styled-components";

const NossaHistoriaMobileStyle = styled.header`
    padding: 50px 150px;
    opacity: 0; /* Inicialmente invisível */
    transform: translateY(20px); /* Começa deslocado para baixo */
    animation: fadeInUp 1s ease-out forwards; /* Animação para a seção inteira */
    background: #f5f5f5;
    display: none;
    
    .imagem-nossa-historia {
        & img {
            width: 100%;
            opacity: 0; /* Inicialmente invisível */
            transform: translateX(-30px); /* Deslocado para a esquerda */
            animation: slideInLeft 1s ease-out forwards;
            animation-delay: 0.4s; /* Aparece depois do texto */
        }
    }
    
    .conteudo-nossa-historia {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 60px;
        opacity: 0;
        animation: fadeInText 1s ease-out forwards;
        animation-delay: 0.2s; /* Aparece depois da seção */
        
        .titulo-nossa-historia {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .titulo-principal-nossa-historia {
                color: rgb(68, 97, 124);
                font-size: var(--titulo);
                font-family: Montserrat, sans-serif;
                font-weight: 700;
                overflow-wrap: break-word;
                opacity: 0; /* Invisível no início */
                animation: fadeIn 1s ease-out forwards;
                animation-delay: 0.2s; /* Começa após a entrada da seção */
            }

            .subtitulo-nossa-historia {
                color: rgb(87, 127, 164);
                font-size: var(--subtitulo)
                font-family: Montserrat, sans-serif;
                font-weight: 400;
                overflow-wrap: break-word;
                opacity: 0;
                animation: fadeIn 1s ease-out forwards;
                animation-delay: 0.4s; /* Aparece depois do título */
            }
        }
    }
    
    .corpo-nossa-historia {
        margin-bottom: 50px;
        margin-top: 20px;
        color: black;
        font-size: var(--corpo);
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 35px;
        word-wrap: break-word;
        opacity: 0; /* Invisível no início */
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.6s; /* Aparece depois do subtítulo */
    }
    
    @media screen and (max-width: 1600px) {
        .div-nossa-historia {
            padding: 50px 100px;
        }
        
        .conteudo-nossa-historia {
            padding-left: 40px;
        }
        
        .subtitulo-nossa-historia {
            font-size: var(--corpo);
        }
        
        .corpo-nossa-historia {
            margin-top: 10px;
            line-height: 30px;
        }
    }
    
    @media screen and (max-width: 1024px) {
        display: flex;
        padding: 50px 0;
        flex-direction: column;
        align-items: center;
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

export { NossaHistoriaMobileStyle };
