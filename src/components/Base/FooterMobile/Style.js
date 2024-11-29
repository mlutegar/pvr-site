import styled from "styled-components";

const FooterMobileStyle = styled.header`
    display: none;
    padding: 20px 20px;
    flex-direction: column;

    .dv-footer {
        background: white;
        padding: 50px 150px;
        animation: fadeIn 1s ease-in-out;
    }

    .conteudo {
        width: 100%;
        display: flex;
        // alinhar por coluna
        flex-direction: row;
        justify-content: space-between;
        border-top: 4px solid #577FA4;
        padding-top: 20px;
        animation: slideUp 1s ease-in-out;
    }

    .nav {
        display: flex;
        gap: 20px;
        flex-direction: column;

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

    .logo {
        animation: zoomIn 1.5s ease-in-out;
        
        img{
            width: 50px;
            height: auto;
        }
    }

    .dv-fr-copyright {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: fadeInUp 1.5s ease-in-out;
    }
    
    @media screen and (max-width: 768px) {
        display: flex;
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

export { FooterMobileStyle };
