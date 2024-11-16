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
                font-size: 40px;
                font-family: Montserrat, sans-serif;
                font-weight: 700;
                word-wrap: break-word;
                
            }

            .subtitulo {
                opacity: 0.60;
                color: white;
                font-size: 24px;
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
                height: 100%;
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
            gap: 4rem;
            transition: transform 0.5s;
            align-items: center;
        }
    }
`

export {TransacoesStyle}