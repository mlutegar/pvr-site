import styled from "styled-components";

const BannerStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 0 10px;
    margin-bottom: 0;
    opacity: 0; /* Inicialmente invisível */
    transform: translateY(-20px); /* Começa deslocado para cima */
    animation: bannerFadeIn 1s ease-out forwards; /* Animação */
    margin: 50px 150px 0;
    max-width: 1920px;

    .Titulo {
        .Titulo-destaque,
        .Titulo-subtitulo {
            display: block;
            color: #44617C;
            font-size: var(--titulo);
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
    }

    .Grafico {
        display: flex;
        gap: 20px;
        align-items: flex-end;
        opacity: 0; /* Inicialmente invisível */
        animation: slideUp 1.2s ease-out forwards; /* Animação */
        animation-delay: 0.7s;
        
        .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
            width: 141px;
            opacity: 0.60;
        }

        .Coluna1 {
            height: 161px;
            background: #E8E8E8;
        }

        .Coluna2 {
            height: 269px;
            background: #577FA4;
        }

        .Coluna3 {
            height: 567px;
            background: #44617C;
        }

        .Coluna4 {
            height: 695px;
            background: #D0D0D0;
        }
    }
    
    @media screen and (max-width: 1600px) {
        margin: 50px 100px 0;

        .Grafico {
            .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
                width: 120px;
            }

            .Coluna1 {
                height: 137px;
            }

            .Coluna2 {
                height: 230px;
            }

            .Coluna3 {
                height: 485px;
            }

            .Coluna4 {
                height: 595px;
            }
        }
    }


    @media screen and (max-width: 1440px) {
        .Titulo {
            .Titulo-destaque,
            .Titulo-subtitulo {
                font-size: 44px;
            }
        }

        .Grafico {
            .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
                width: 80px;
            }

            .Coluna1 {
                height: 84px;
            }

            .Coluna2 {
                height: 188px;
            }

            .Coluna3 {
                height: 396px;
            }

            .Coluna4 {
                height: 485px;
            }
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
