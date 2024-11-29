import styled from "styled-components"

const TopicoAssessorStyle = styled.header`
    margin-top: 50px;
    
    .topico {
        color: #577FA4;
        font-family: Montserrat;
        font-size: var(--subtitulo);;
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
                font-size: var(--corpo);
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-top: 20px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
    
    
`

export {TopicoAssessorStyle}