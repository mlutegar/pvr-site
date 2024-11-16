import styled from "styled-components";

const NossosServicosStyle = styled.header`
    .dv-nossos-servicos {
        background: #44617c;
        padding: 50px 150px 0;
        opacity: 0;
        animation: fadeInUp 1s ease-out forwards;
    }

    .dv-nossos-servicos-titulo {
        top: 69px;
        color: white;
        font-size: 40px;
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.2s;
    }

    .dv-nossos-servicos-conteudo {
        padding-top: 4rem;
        display: flex;
        justify-content: center;
        gap: 75px;
        opacity: 0;
        animation: fadeInUp 1s ease-out forwards;
        animation-delay: 0.4s;
    }

    .cd-nossos-servicos {
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.8s ease-out forwards;
        animation-delay: 0.6s;
    }

    .cd-logo-nossos-servicos {
        height: 100px;
        opacity: 0;
        animation: zoomIn 1s ease-out forwards;
        animation-delay: 0.8s;
    }

    .cd-titulo-nossos-servicos {
        padding-bottom: 30px;
        color: #FDFDFD;
        font-size: 24px;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        word-wrap: break-word;
        border-bottom: 2px solid #577fa4;
        display: flex;
        justify-content: center;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 1s;
    }

    .cd-conteudo-nossos-servicos {
        text-align: center;
        color: white;
        font-size: 20px;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 35px;
        word-wrap: break-word;
        padding-top: 30px;
        opacity: 0;
        animation: fadeInText 1s ease-out forwards;
        animation-delay: 1.2s;
    }

    .dv-nossos-servicos-botao {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .Graficopequeno1 {
        transform: scaleX(-1);
        /* transform-origin: 0 0; */
        justify-content: center;
        align-items: flex-end;
        gap: 29px;
        display: inline-flex;
        animation: slideInLeft2 1s ease-out forwards;
        opacity: 0;
        animation-delay: 1.4s;
    }

    .Graficopequeno2 {
        /* width: 298px; */
        /* height: 184px; */
        /* left: 1499px; */
        /* position: relative; */
        /* justify-content: center; */
        align-items: flex-end;
        gap: 29px;
        display: inline-flex;
        animation: slideInLeft 1s ease-out forwards;
        opacity: 0;
        animation-delay: 1.4s;
        transform: scaleX(1);
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
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInLeft2 {
        from {
            opacity: 0;
            transform: translateX(-20px) scaleX(-1);
        }
        to {
            opacity: 1;
            transform: translateX(0) scaleX(-1);
        }
    }

    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

export { NossosServicosStyle };
