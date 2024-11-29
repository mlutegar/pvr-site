import styled from "styled-components";

const NossosServicosMobileStyle = styled.header`
    background: #44617c;
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;
    display: none;
    padding: 50px 0;
    flex-direction: column;
    align-items: center;
    font-size: var(--titulo);
    font-family: Montserrat, sans-serif;
    
    .botaoSeta{
        background: none;
        border: none;
        cursor: pointer;
        transition: transform 0.2s ease;
        
        img{
            width: 50%;
        }
    }
    
    .botaoSeta:active{
        transform: scale(0.9);
    }
    
    .dv-paginacao{
        margin-bottom: 20px;
    }

    .titulo {
        color: white;
        font-weight: 700;
        word-wrap: break-word;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.2s;
    }

    .conteudo {
        padding-top: 20px;
        display: flex;
        justify-content: center;
        gap: 100px;
        opacity: 0;
        animation: fadeInUp 1s ease-out forwards;
        animation-delay: 0.4s;
        font-size: var(--corpo);
        width: 70%;
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
        
        img{
            height: 80%;
        }
    }

    .cd-titulo-nossos-servicos {
        padding-bottom: 20px;
        color: #FDFDFD;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        word-wrap: break-word;
        border-bottom: 2px solid #577fa4;
        font-size: var(--subtitulo);
        display: flex;
        justify-content: center;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 1s;
        text-align: center;
    }
    
    .dv-nossos-servicos-botoes{
        width: 100%;
        position: absolute;
        top: 50%;
        display: flex;
        gap: 20px;
        padding: 20px 0;
        justify-content: space-between;
        
        button {
            margin: 0 5px;
            padding: 5px 10px;
        }
    }

    .cd-conteudo-nossos-servicos {
        text-align: center;
        color: white;
        //font-size: 0.8em;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 22px;
        word-wrap: break-word;
        padding-top: 15px;
        opacity: 0;
        animation: fadeInText 1s ease-out forwards;
        animation-delay: 1.2s;
    }
    
    ul{
        list-style: none;
        padding: 0;
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


    .conteudo{
        flex-direction: column;
        align-items: center;
    }

    .Graficopequeno1, .Graficopequeno2 {
        display: none;
    }

    .Coluna1, .Coluna2, .Coluna3{
        width: 50px;
    }

    @media screen and (max-width: 768px) {
        display: flex;
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

export { NossosServicosMobileStyle };
