import styled from "styled-components";

const FooterStyle = styled.header`
    padding: 50px 150px;

    .dv-footer {
        background: white;
        padding: 50px 150px;
        animation: fadeIn 1s ease-in-out;
    }

    .dv-fr-conteudo {
        display: flex;
        justify-content: space-between;
        border-top: 4px solid #577FA4;
        padding-top: 20px;
        animation: slideUp 1s ease-in-out;
    }

    .dv-fr-co-nav {
        display: flex;
        gap: 50px;

        & a {
            color: #44617c;
            font-size: var(--corpo);
            font-family: Montserrat, sans-serif;
            font-weight: 400;
            word-wrap: break-word;
            text-decoration: none;
            transition: color 0.3s, transform 0.3s;

            &:hover {
                color: #577FA4;
                transform: scale(1.1);
            }

            &:active {
                transform: scale(0.95);
            }
        }
    }

    .dv-fr-co-logo {
        animation: zoomIn 1.5s ease-in-out;
    }

    .dv-fr-copyright {
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: fadeInUp 1.5s ease-in-out;
    }
    
    @media screen and (max-width: 426px) {
        padding: 0;   
        
        .dv-fr-conteudo {
            flex-direction: column;
            padding-top: 0;
        }
        
        .dv-fr-co-nav {
            flex-direction: column;
            gap: 20px;
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

    @keyframes slideUp {
        from {
            transform: translateY(20px);
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
`;

export { FooterStyle };
