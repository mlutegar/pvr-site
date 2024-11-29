import styled from "styled-components"

const TopicoAssessorMobileStyle = styled.header`
    display: none;
    margin-top: 50px;
    font-family: Montserrat,sans-serif;
    text-align: left;
    flex-direction: column;
    padding: 0 20px;
    
    .topico {
        color: #577FA4;
        font-size: var(--subtitulo);;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    img{
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        margin-right: 5px;
    }
    
    .descricao {
        color: #000;
    }
    
    li {
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 20px;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export {TopicoAssessorMobileStyle}