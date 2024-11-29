import styled from "styled-components";

const BannerStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 0 10px;
    opacity: 0; /* Inicialmente invisível */
    transform: translateY(-20px); /* Começa deslocado para cima */
    animation: bannerFadeIn 1s ease-out forwards; /* Animação */
    margin: 0 150px 0;
    max-width: 1920px;

    .Titulo {
        font-size: 3.1em;
        padding-bottom: 150px;
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
        opacity: 0; /* Inicialmente invisível */
        animation: slideUp 1.2s ease-out forwards; /* Animação */
        animation-delay: 0.7s;
    }

    .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
        width: 8.813rem;
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
    
    @media screen and (max-width: 1600px) {
        margin: 50px 100px 0;

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


    @media screen and (max-width: 1440px) {
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
    
    @media screen and (max-width: 768px) {
        height: 620px;
        margin-bottom: 0;
        opacity: 0;
        flex-direction: column;
        padding: 0;
        position: relative;

        .Titulo {
            font-size: 3.6em;
            padding-bottom: 130px;
            padding-top: 50px;
        }
        
        .Grafico {
            position: absolute;
            gap: 10px;
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
    
    //@media screen and (max-width: 768px) {
    //    .Titulo {
    //        font-size: 3.5em;
    //        padding: 300px 0;
    //    }
    //    
    //    .Grafico {
    //        .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
    //            width: 120px;
    //        }
    //    }
    //}
    //
    //@media screen and (max-width: 426px) {
    //    .Titulo {
    //        font-size: 1.5em;
    //        padding: 300px 0;
    //    }
    //    
    //    .Grafico {
    //        .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
    //            width: 60px;
    //        }
    //    }
    //}
    //
    //@media screen and (max-width: 376px) {
    //    .Titulo {
    //        font-size: 1em;
    //    }
    //
    //    .Grafico {
    //        .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
    //            width: 40px;
    //        }
    //    }
    //}
    //
    //@media screen and (max-width: 321px) {
    //    .Titulo {
    //        font-size: 1em;
    //    }
    //
    //    .Grafico {
    //        .Coluna1, .Coluna2, .Coluna3, .Coluna4 {
    //            width: 20px;
    //        }
    //    }
    //}
    

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
