import styled from "styled-components"

const TransacaoCardMobileStyle = styled.header`
    display: none;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    .Card{
        width: 80%;
        height: 40%;
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
        animation: slideIn 0.8s ease-out;
    }

    .Imagemempresa2,
    .Imagemempresa1 {
        padding: 0 10px;
        width: 75%;
        height: auto;
        transition: transform 0.3s ease;
    }
    
    img{
        width: 50%;
        height: auto;
    }
    
    .Imagemempresa2{
        border-right: 2px solid #577FA4;
    }

    .Br {
        width: 2px;
        height: 60px;
        background-color: #577FA4;
    }

    .Conteudo-texto {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 10px;
        padding: 0 10px;
        animation: fadeInText 0.6s ease-out;
    }

    .Titulo-transacao {
        text-align: center;
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
    
    @media screen and (max-width: 768px) {
        display: flex;
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

export {TransacaoCardMobileStyle};
