import styled from "styled-components"

const ConsultoriasEspecializadasStyle = styled.header`
    background: linear-gradient(rgba(6, 6, 6, 0.55), rgba(6, 6, 6, 0.55)), url("imagens/fundoservicos.png");
    height: 857px;
    flex-shrink: 0;
    margin-top: 50px;
    padding: 50px 150px;
    
    .titulo{
        margin-top: 100px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        height: 53px;
        flex-shrink: 0;
    }
    
    .descricao {
        margin-top: 50px;
        width: 70%;
        
        color: #FFF;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 150% */

        height: 496px;
        flex-shrink: 0;
    }
    
    .parte1 {
        height: 70px;
        flex-shrink: 0;
    }
    
    .topicos {
        margin-top: 20px;
        height: 426px;
        flex-shrink: 0;
        
        ul {
            li{
                margin-top: 30px;
                color: #FFF;
                font-family: Montserrat;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 30px; /* 150% */
            }
        }
    }
`

export {ConsultoriasEspecializadasStyle}