import styled from "styled-components";

const AssessorHomeStyle = styled.header`
    .Assessor {
        background: url("imagens/assesor.png");
        padding: 50px 150px;
        opacity: 1;
    }

    .Assessor-conteudo {
        display: flex;
        padding-top: 150px;
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
        font-size: 40px;
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.4s;
    }

    .Assessor-corpo {
        color: white;
        font-size: 20px;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        line-height: 35px;
        word-wrap: break-word;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.6s;
    }

    .btn-assessor {
        padding-top: 18px;
        padding-bottom: 19px;
        padding-left: 92px;
        padding-right: 92px;

        background: #577FA4;
        border-radius: 15px;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        display: inline-flex;

        color: white;
        font-size: 24px;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        word-wrap: break-word;
        opacity: 0;
        transform: scale(0.9); /* Inicialmente menor */
        animation: zoomInButton 1s ease-out forwards;
        animation-delay: 0.8s; /* Animação com atraso */
        transition: transform 0.3s ease;
    }

    .btn-assessor:hover {
        transform: scale(1.05); /* Aumenta ligeiramente o botão no hover */
    }

    .dv-assessor-botao {
        padding-bottom: 50px;
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

export { AssessorHomeStyle };
