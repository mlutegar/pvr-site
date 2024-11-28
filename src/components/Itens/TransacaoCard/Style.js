import styled from "styled-components"

const TransacaoCardStyle = styled.header`
    
    .Card{
        width: 450px;
        height: 450px;
        background: white;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        font-size: var(--corpo);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        animation: fadeIn 0.6s ease-out;
    }
    
    .Card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    }

    .Fundo-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px;
        box-sizing: border-box;
    }

    .Imagens {
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideIn 0.8s ease-out;
    }

    .Imagemempresa2,
    .Imagemempresa1 {
        width: 140px;
        height: auto;
        transition: transform 0.3s ease;
    }

    .Br {
        width: 2px;
        height: 60px;
        background-color: #577FA4;
    }

    .Conteudo-texto {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        gap: 10px;
        padding: 0 10px;
        animation: fadeInText 0.6s ease-out;
    }

    .Titulo-transacao {
        color: black;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        margin-bottom: 10px;
        opacity: 0;
        animation: fadeIn 0.8s ease-out forwards;
    }

    .Descricao-transacao {
        color: black;
        font-size: 0.7em;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        margin-top: 10px;
        opacity: 0;
        animation: fadeIn 1.2s ease-out forwards;
    }

    @media screen and (max-width: 1600px) {
        .Card {
            width: 400px;
            height: 400px;
        }

        .Imagemempresa2,
        .Imagemempresa1 {
            width: 120px;
        }

        .Br {
            height: 50px;
        }
        
    }
    
    @media screen and (max-width: 1440px) {
        .Card {
            width: 340px;
            height: 340px;
        }
    }

    /* Keyframes for Animations */
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

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeInText {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export {TransacaoCardStyle};
