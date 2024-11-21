import styled from "styled-components"

const HeaderStyle = styled.header`
    .desktop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 50px 150px 0;
        max-width: 1920px;

        .left {
            img {
                width: 133px;
                height: 107px;
            }
        }

        .center {
            display: flex;
            gap: 70px;
            font-family: Montserrat, serif;
            font-size: var(--corpo);
            font-weight: 400;

            & a {
                text-decoration: none;
                color: black;
            }

            & a:hover {
                color: #577FA4; /* Cor de destaque ao passar o mouse */
                text-decoration: none; /* Sublinha o texto no hover */
            }
        }

        .right {
            display: flex;
            gap: 0;

            .langButton {
                width: 46px;
                height: 46px;
                cursor: pointer;
                font-size: var(--botao);
                font-family: Montserrat, serif;
                font-weight: 400;
                transition: background-color 0.3s, transform 0.3s;
                border: 1px solid #44617C;

                &:hover {
                    transform: scale(1.1);
                }
            }

            .en {
                padding: 1px;
                transition: background-color 0.3s, transform 0.3s;
            }

            .ativo {
                background: #44617C;
                color: white;
                border: 1px solid #44617C;
            }

            .desativo {
                background: white;
                color: #44617C;
            }
        }
    }

    .mobile {
        display: none;

        justify-content: space-between;
        align-items: center;
        padding: 10px 100px;
        max-width: 1920px;

        .left {
            img {
                width: 200px;
                height: 160px;
            }
        }

        .center {
            gap: 50px;
            font-size: var(--corpo);
        }

        .right {
            gap: 0;
            display: flex;

            .buggerMenu {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: none;
                border: none;
                cursor: pointer;
                max-width: 1920px;
                
                svg{
                    width: 100px;
                    height: 70px;
                }
            }
        }
    }
    
    @media (max-width: 1440px) {
        .left {
            img {
                width: 100px;
                height: 80px;
            }
        }

        .center {
            gap: 50px;
            font-size: var(--corpo);
        }

        .right {
            gap: 0;

            .langButton {
                width: 40px;
                height: 40px;
                font-size: var(--botao);
            }
        }
    }

    @media (max-width: 1024px) {
        .desktop {
            display: none;
        }

        .mobile {
            display: flex;
        }
    }
`

export {HeaderStyle}