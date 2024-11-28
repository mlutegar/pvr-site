import styled from "styled-components"


const TransacoesStyle = styled.header`
    padding: 50px 150px;
    background: #44617c;

    .header {
        display: flex;
        justify-content: space-between;

        .titulo {
            .titulo-principal {
                color: white;
                font-size: var(--titulo);
                font-family: Montserrat, sans-serif;
                font-weight: 700;
                word-wrap: break-word;
                
            }

            .subtitulo {
                opacity: 0.60;
                color: white;
                font-size: var(--subtitulo);
                font-family: Montserrat, sans-serif;
                font-weight: 400;
                word-wrap: break-word;
                width: 400px;
            }
        }
    }

    .conteudo {
        display: flex;
        justify-content: space-between;
        padding: 50px 0;
        height: 450px;
        
        .botao {
            background: none;
            border: none;
            cursor: pointer;
            
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            transition: transform 0.2s ease;
            position: relative;
            top: 203px;
            
            img {
                width: 100%;
            }

            :hover {
                transform: scale(1.1);
            }
        }

        .seta:hover {
            transform: scale(1.1) rotate(-180deg);
        }

        .seta1 {
            transform: rotate(-180deg); /* Inverte a seta 1 */
        }
        
        .cards {
            display: flex;
            gap: 30px;
            transition: transform 0.5s;
            align-items: center;
        }
    }
    
    @media screen and (max-width: 1600px) {
        .conteudo {
            .botao {
                width: 40px;
                height: 40px;
            }
        }
    }
    
    @media screen and (max-width: 769px) {
        padding: 0;
        
        .header {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            
            .titulo {
                text-align: center;
                
                .titulo-principal {
                    font-size: var(--titulo-mobile);
                    width: 300px;
                }
                
                .subtitulo {
                    font-size: var(--subtitulo-mobile);
                    width: 300px;
                }
            }
        }
        
        .conteudo {
            flex-direction: column;
            gap: 20px;
            height: 100%;
            
            .botao {
                display: none;
            }
            
            .cards {
                justify-content: center;
            }
        }
    }
    
    @media screen and (max-width: 426px) {
        padding: 0;
        
        .header{
            padding: 0;
            display: flex;
            flex-direction: column;
        }
        
    }
`

export {TransacoesStyle}