import styled from "styled-components"

const ContatoStyle = styled.header`



    .dv-contato {
        background: #f5f5f5;
        padding: 50px 150px;
    }

    .dv-co-titulo {
        color: #44617c;
        font-size: 40px;
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        word-wrap: break-word;
    }

    .dv-co-conteudo {
        display: flex;
        gap: 50px;
        padding-top: 50px;
    }

    .dv-co-co-mapa {
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }

    .Mapa-contato {
        width: 489px;
    }


    .dv-co-co-info {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .dv-co-co-in-item {
        display: flex;
        gap: 20px;
    }

    .dv-co-co-in-icone {
        height: 50px;
    }

    .dv-co-co-in-texto {
        color: #44617c;
        font-size: 24px;
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        word-wrap: break-word;
    }
`

export {ContatoStyle}