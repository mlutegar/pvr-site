import styled from "styled-components"

const TransacoesInteiroStyle = styled.header`
    background-color: #44617c;
    padding: 50px 100px;

    .titulo-principal {
        color: #FFF;
        font-family: Montserrat,serif;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .paginacao {
        position: relative;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .dv-paginacao{
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
    }


    .botoes{
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;

        button {
            width: 10px;
            height: 10px;
            padding: 10px;
            margin: 0 40px;
        }
    }
    
    .header {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        
        .titulo-secundario {
            color: #FFF;
            font-family: Montserrat;
            font-size: var(--subtitulo);
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            opacity: 0.6;
        }
        
        .pesquisa{
            .icone-pesquisa {
                position: relative;
                left: 40px;
            }
            
            .input-pesquisa {
                width: 423px;
                height: 58px;
                flex-shrink: 0;

                border: 2px solid #577FA4;
                background: #FFF;
                padding-left: 50px;
                
                & :focus {
                    border: 2px solid #577FA4;
                }
                
                &::placeholder {
 
                    color: #577FA4;
                    font-family: Montserrat;
                    font-size: var(--corpo);
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
        }
    }

    span {
        color: #FFF;
        font-family: Montserrat;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        align-items: center;
    }
    
    .transacoes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 100px;
        margin-bottom: 50px;
        margin-top: 100px;
        
        .linha1 {
            display: flex;
            justify-content: space-between;
        }
        
        .linha2 {
            display: flex;
            justify-content: space-between;
        }
    }
    
    @media screen and (max-width: 1440px) {
        .titulo-principal {
            padding-top: 25px;
        }
        
        .header{
            .pesquisa {
                position: relative;

                .icone-pesquisa {
                    position: absolute;
                    left: 16px;
                    top: 23px;
                }
            }   
        }
        
        .transacoes{
            gap: 60px;
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export {TransacoesInteiroStyle}