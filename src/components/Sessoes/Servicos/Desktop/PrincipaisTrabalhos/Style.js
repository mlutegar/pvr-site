import styled from "styled-components"

const PrincipaisTrabalhosStyle = styled.header`
    padding: 50px 100px;
    
    .titulo {
        margin-top: 50px;
        
        color: #44617C;
        font-family: Montserrat;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    
    .conteudo {
        display: flex;
        gap: 50px;
        margin-top: 50px;

        color: #000;
        font-family: Montserrat;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
        line-height: 35px; /* 175% */
        
        .parte1 {
            border-right: 2px solid #44617C;  
            width: 50%;
            ul {
                padding: 0;
                
                li {
                    margin-top: 30px;
                }
            }
        }
        
        .parte2 {
            width: 50%;
            
            ul {
                padding: 0;
                
                li {
                    margin-top: 30px;
                }
                
                .imagem {
                    margin-top: 50px;
                    display: flex;
                    justify-content: center;
                    
                    img {
                        width: 321px;
                        height: 151px;
                        flex-shrink: 0;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`

export {PrincipaisTrabalhosStyle}