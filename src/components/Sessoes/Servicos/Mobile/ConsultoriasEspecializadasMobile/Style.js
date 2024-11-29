import styled from "styled-components"

const ConsultoriasEspecializadasMobileStyle = styled.header`
    display: none;
    background: linear-gradient(rgba(6, 6, 6, 0.55), rgba(6, 6, 6, 0.55)), url("imagens/fundoservicos.png") no-repeat center center/cover;
    flex-shrink: 0;
    margin-top: 10px;
    font-family: Montserrat, serif;
    flex-direction: column;
    text-align: center;
    padding-bottom: 50px;

    .titulo {
        color: #FFF;
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 40px;
        padding: 10px;

        font-size: var(--subtitulo);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        flex-shrink: 0;
    }

    .descricao {
        margin-top: 50px;
        color: #FFF;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
        padding: 0 20px;
        height: 496px;
        flex-shrink: 0;
    }

    .parte1 {
        flex-shrink: 0;
    }

    .topicos {
        margin-top: 20px;
        flex-shrink: 0;
    }

    ul {
        padding: 0 30px;
    }

    li {
        margin-top: 30px;
        color: #FFF;
        font-size: var(--corpo);
        font-style: normal;
        font-weight: 400;
        //list-style-type: none;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export {ConsultoriasEspecializadasMobileStyle}