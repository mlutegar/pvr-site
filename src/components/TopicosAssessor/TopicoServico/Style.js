import styled from "styled-components"

const TopicoAssessorStyle = styled.header`
    margin-top: 50px;
    
    .titulo {
        color: #577FA4;
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        
        img{
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: 5px;
        }
    }
    
    .descricao {
        color: #000;
        
        ul {
            li {
                font-family: Montserrat;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-top: 20px;
            }
        }
    }
    
    
`

export {TopicoAssessorStyle}