import styled from "styled-components";

const NossosServicosStyle = styled.header`
    background: #44617c;
    padding: 50px 150px 0;
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;

    .dv-nossos-servicos-titulo {
        top: 69px;
        color: white;
        font-size: var(--titulo);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.2s;
        padding-top: 30px;
    }

    .dv-nossos-servicos-conteudo {
        padding-top: 4rem;
        display: flex;
        justify-content: center;
        gap: 100px;
        opacity: 0;
        animation: fadeInUp 1s ease-out forwards;
        animation-delay: 0.4s;
        font-size: var(--corpo);

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
            font-size: 0.8em;
            font-family: Montserrat, sans-serif;
            font-weight: 400;
            line-height: 35px;
            word-wrap: break-word;
            padding-top: 30px;
            opacity: 0;
            animation: fadeInText 1s ease-out forwards;
            animation-delay: 1.2s;
            width: 300px;
        }
    }
    
    .dv-nossos-servicos-botao {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .Graficopequeno1 {
        transform: scaleX(-1);
        justify-content: center;
        align-items: flex-end;
        gap: 29px;
        display: inline-flex;
        animation: slideInLeft2 1s ease-out forwards;
        opacity: 0;
        animation-delay: 1.4s;
    }

    .Graficopequeno2 {
        align-items: flex-end;
        gap: 29px;
        display: inline-flex;
        animation: slideInLeft 1s ease-out forwards;
        opacity: 0;
        animation-delay: 1.4s;
        transform: scaleX(1);
    }
    
    .Coluna1, .Coluna2, .Coluna3{
        width: 80px;   
    }
    
    @media screen and (max-width: 1600px) {
        .dv-nossos-servicos {
            padding: 50px 100px 0;
        }
        
        .cd-conteudo-nossos-servicos {
            line-height: 30px;
        }
        
        .Graficopequeno1 {
            gap: 20px;
        }
        
        .Graficopequeno2 {
            gap: 20px;
        }
        
    }
    
    @media screen and (max-width: 1440px) {
        .cd-nossos-servicos {
            width: 300px;
        }
        
        .dv-nossos-servicos-conteudo {
            margin-bottom: 40px;
        }
    }
    
    @media screen and (max-width: 1024px) {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .dv-nossos-servicos-conteudo{
            flex-direction: column;
            align-items: center;
        }
    }

    @media screen and (max-width: 769px) {
        .Graficopequeno1, .Graficopequeno2 {
            gap: 5px;
        }

        .Coluna1, .Coluna2, .Coluna3{
            width: 50px;
        }
    }
    
    @media screen and (max-width: 426px) {
        .Graficopequeno1, .Graficopequeno2 {
            display: none;
        }

        .Coluna1, .Coluna2, .Coluna3{
            width: 50px;
        }
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
