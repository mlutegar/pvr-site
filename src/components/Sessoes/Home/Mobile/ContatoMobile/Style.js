import styled from "styled-components";

const ContatoMobileStyle = styled.header`
    background: #f5f5f5;
    animation: fadeIn 1s ease-in-out;
    padding: 50px 0;
    display: none;
    flex-direction: column;
    align-items: center;

    .dv-co-titulo {
        color: #44617c;
        font-size: var(--titulo);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
        animation: slideDown 1s ease-in-out;
    }

    .conteudo {
        width: 90%;
        display: flex;
        gap: 50px;
        padding-top: 50px;
        animation: fadeIn 1.5s ease-in-out;
    }

    .dv-co-co-mapa {
        display: flex;
        justify-content: flex-end;
        animation: zoomIn 1s ease-in-out;
    }

    .Mapa-contato {
        transition: transform 0.3s;
        width: 100%;
    }

    .dv-co-co-info {
        display: flex;
        flex-direction: column;
        gap: 50px;
        animation: fadeIn 2s ease-in-out;
    }

    .dv-co-co-in-item {
        display: flex;
        gap: 20px;
        animation: slideIn 1s ease-in-out;
    }

    .dv-co-co-in-icone {
        transition: transform 0.3s;
        display: flex;
        align-items: center;

        img{
            width: 70%;
        }
    }

    .dv-co-co-in-texto {
        color: black;
        font-size: var(--subtitulo);
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        word-wrap: break-word;
        animation: fadeInUp 1.5s ease-in-out;
    }
    
    @media screen and (max-width: 768px) {
        display: flex;
        .conteudo {
            flex-direction: column;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideDown {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes zoomIn {
        from {
            transform: scale(0.9);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes fadeInUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(-20px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

export { ContatoMobileStyle };
