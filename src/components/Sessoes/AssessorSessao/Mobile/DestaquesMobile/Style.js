import styled from "styled-components"

const DestaquesMobileStyle = styled.header`
    display: none;
    background: #44617C;
    font-family: Montserrat, sans-serif;
    text-align: center;
    flex-direction: column;

    .titulo {
        padding: 40px 0;
        color: #FFF;
        font-size: var(--titulo);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    
    .conteudo {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 50px;

        color: #FFF;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .coluna1 {
        padding-bottom: 30px;
        border-bottom: 2px solid #577FA4;
    }

    .coluna2 {
        padding-top: 30px;
    }
    
    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export {DestaquesMobileStyle}