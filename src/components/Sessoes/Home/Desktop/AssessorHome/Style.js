import styled from "styled-components";

const AssessorHomeStyle = styled.header`
    background: url("imagens/assesor.png") no-repeat center center/cover;
    padding: 50px 100px;
    opacity: 1;

    .Assessor-conteudo {
        display: flex;
        flex-direction: column;
        gap: 60px;
        width: 50%;
        opacity: 0;
        transform: translateY(20px); /* Deslocado para baixo inicialmente */
        animation: fadeInUp 1s ease-out forwards;
        animation-delay: 0.2s; /* Animação com atraso */
    }

    .Assessor-titulo {
        color: #E8E8E8;
        font-size: var(--titulo);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.4s;
    }

    .tituloMobile {
        display: none;
        color: #E8E8E8;
        font-size: var(--titulo);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.4s;
    }

    .Assessor-corpo {
        color: white;
        font-size: var(--corpo);
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 35px;
        word-wrap: break-word;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.6s;
    }
    

    @media screen and (max-width: 1600px) {
        .assessor-conteudo {
            width: 60%;
        }
    }
    
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 35px;
        
        .Assessor-titulo {
            display: none;
        }

        .tituloMobile {
            display: flex;
            text-align: center;
        }
        
        .Assessor-conteudo {
            width: auto;
            padding: 10px 20px;
        }
        
        .Assessor-corpo{
            line-height: 15px;
            text-align: center;
        }
        
        .dv-assessor-botao{
            padding: 0;
            display: flex;
            justify-content: center;
        }
    }
    

    /* Keyframes para as animações */
    @keyframes fadeInBackground {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

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

    @keyframes zoomInButton {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

export {AssessorHomeStyle};
